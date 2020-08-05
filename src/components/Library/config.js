export const BOOK = 'BOOK'
export const BOOKS = 'BOOKS'
export const MAGAZINES = 'MAGAZINES'
export const MAGAZINE = 'MAGAZINE'

export const tableCells = [
  {
    title: 'isbn',
    headerTitle: 'ISBN',
    cellStyle: {
      display: 'inline-block',
      padding: '0 8px',
      width: '10%'
    },
    isSortable: false
  },
  {
    title: 'title',
    headerTitle: 'TITLE',
    cellStyle: {
      display: 'inline-block',
      padding: '0 8px',
      width: '15%',
      position: 'relative'
    },
    isSortable: true
  },
  {
    title: 'additionalData',
    headerTitle: 'DESCRIPTION / PUBLISHED AT',
    cellStyle: {
      display: 'inline-block',
      padding: '0 8px',
      width: '45%'
    },
    isSortable: false
  },
  {
    title: 'authors',
    headerTitle: 'AUTHORS',
    widthDefault: 'auto',
    cellStyle: {
      display: 'inline-block',
      padding: '0 8px',
      width: 'auto'
    },
    isSortable: false
  }
]

export const addBookMagazineTextFields = [
  {
    key: 'title',
    placeholder: 'Title*',
    switchable: false
  },
  {
    key: 'isbn',
    placeholder: 'ISBN*',
    switchable: false
  },
  {
    key: 'authors',
    placeholder: 'Authors (emails)  *',
    switchable: false
  },
  {
    key: 'publishedAt',
    placeholder: 'Published at',
    switchable: true,
    conditionalKey: MAGAZINE
  },
  {
    key: 'description',
    placeholder: 'Description',
    switchable: true,
    conditionalKey: BOOK
  }
]
