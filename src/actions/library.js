import { BOOK } from '../../src/components/Library/config'

const DESCRIPTION = 'description'
const PUBLISHED_AT = 'publishedAt'

export const SET_LIBRARY_DATA = 'SET_LIBRARY_DATA'
export const ADD_NEW_DATA = 'ADD_NEW_DATA'

export function setLibraryData (data) {
  const payload = {
    fullData: [],
    magazines: data.magazines,
    books: data.books
  }
  payload.fullData = [].concat(data.books, data.magazines).map((item) => { // join books and magazines to 1 array of objects
    const newItem = Object.assign({}, item)
    const authors = newItem.authors.split(',').map((authorMail) => { // get authors by book/magazine author mail
      let currentAuthorsData = {}
      for (let i = 0; i < data.authors.length; i++) {
        if (data.authors[i].email === authorMail) {
          currentAuthorsData = data.authors[i]
          break
        }
      }
      return currentAuthorsData
    })
    newItem.additionalData = { // replace @description or @publishedAt with .additionalData
      type: newItem.description ? DESCRIPTION : PUBLISHED_AT,
      value: newItem.description || newItem.publishedAt
    }
    delete newItem.description
    delete newItem.publishedAt
    return {
      ...newItem, authors
    }
  })
  return {
    type: SET_LIBRARY_DATA,
    payload
  }
}

export function addNewData (data, additionType) {
  const authorsString = data.authors.replace(/\s/g, '')
  const authorsList = authorsString.split(',').map(item => (
    { email: item, firstname: item, lastname: '' }
  ))
  const additionTypeKey = additionType === BOOK ? DESCRIPTION : PUBLISHED_AT
  const payload = {
    newFullDataItem: {
      title: data.title,
      isbn: data.isbn,
      additionalData: {
        type: additionTypeKey,
        value: data.description || data.publishedAt
      },
      authors: authorsList
    },
    newAddition: {
      type: additionType,
      data: {
        title: data.title,
        isbn: data.isbn,
        [additionTypeKey]: data.description || data.publishedAt,
        authors: authorsString
      }
    }
  }
  return {
    type: ADD_NEW_DATA,
    payload
  }
}
