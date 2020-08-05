import React, { useEffect } from 'react'
import LibraryTable from '../components/Library/LibraryTable'
import { setLibraryData } from '../actions/library'
import * as authors from '../../data/authors.json'
import * as books from '../../data/books.json'
import * as magazines from '../../data/magazines.json'
import { useDispatch } from 'react-redux'

const LibraryContainer = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setLibraryData({ books: books.default, magazines: magazines.default, authors: authors.default }))
  }, [])

  return (
    <LibraryTable/>
  )
}

export default LibraryContainer
