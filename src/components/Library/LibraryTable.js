import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Button } from '@material-ui/core'
import { orderBy } from 'lodash'
import AddBookMagazineDialog from './AddBookMagazineDialog'
import ExportDataDialog from './ExportDataDialog'
import TableHeader from '../Table/TableHeader'
import TableRows from '../Table/TableRows'
import { LIBRARY_BUTTON, LIBRARY_STYLES, LIBRARY_WRAPPER_STYLES } from '../../utils/consts'
import { FilterInput } from '../Table/FliterInput'

const LibraryTable = () => {

  const libraryFullData = useSelector(state => (state.library?.fullData))
  const [libraryData, setLibraryData] = useState([])
  const [sortParameters, setSortParameters] = useState({ field: 'title', order: 'asc' })
  const [filterValue, setFilterValue] = useState('')
  const [openAddBookMagazineDialogState, setOpenAddBookMagazineDialogState] = useState(false)
  const [openExportDataDialogState, setOpenExportDataDialogState] = useState(false)

  useEffect(() => {
    let libraryFilteredData = !filterValue ? libraryFullData : libraryFullData.filter((item) => {
      if (item.isbn.toString().toLowerCase().includes(filterValue.toLowerCase())) {
        return true
      }
      let authorsMails = ''
      item.authors.forEach(author => {authorsMails += `${author.email} `})
      return authorsMails.toLowerCase().includes(filterValue.toLowerCase())
    })

    libraryFilteredData && setLibraryData(orderBy(libraryFilteredData, sortParameters.field, sortParameters.order))
  }, [libraryFullData?.length, sortParameters, filterValue])

  const closeAddBookMagazineDialog = () => {
    setOpenAddBookMagazineDialogState(false)
  }
  const openAddBookMagazineDialog = () => {
    setOpenAddBookMagazineDialogState(true)
  }

  const closeExportDataDialog = () => {
    setOpenExportDataDialogState(false)
  }
  const openExportDataDialog = () => {
    setOpenExportDataDialogState(true)
  }

  return (
    <>
      <div style={LIBRARY_STYLES}>
        <FilterInput
          filterValue={filterValue}
          setFilterValue={setFilterValue}
        />
        <div style={LIBRARY_WRAPPER_STYLES}>
          <Button
            onClick={openAddBookMagazineDialog}
            variant="contained"
            style={LIBRARY_BUTTON}
          >
            Add Book / Magazine
          </Button>
          <Button
            onClick={openExportDataDialog}
            variant="contained"
          >
            Export
          </Button>
        </div>
      </div>
      <TableHeader
        sortParameters={sortParameters}
        setSortParameters={setSortParameters}
      />
      <TableRows libraryData={libraryData}/>
      <AddBookMagazineDialog
        openState={openAddBookMagazineDialogState}
        onCloseCallback={closeAddBookMagazineDialog}
      />
      <ExportDataDialog
        openState={openExportDataDialogState}
        onCloseCallback={closeExportDataDialog}
      />
    </>
  )
}

export default LibraryTable
