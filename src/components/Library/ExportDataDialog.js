import React, { useState } from 'react'
import { Dialog, DialogTitle, DialogContent, DialogActions, Switch, FormControlLabel, Button } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { CSVLink } from 'react-csv'
import { ADDED_DATA_ONLY, FULL_DATA } from '../../utils/consts'
import { BOOKS, MAGAZINES } from './config'

const ExportDataDialog = ({ openState = false, onCloseCallback }) => {

  const libraryData = useSelector(state => (state.library))
  const [exportDataType, setExportDataType] = useState(BOOKS)
  const [isFullDataExport, setIsFullDataExport] = useState(false)

  const getDataForExport = () => {
    const booksKey = isFullDataExport ? 'books' : 'newBooks'
    const magazinesKey = isFullDataExport ? 'magazines' : 'newMagazines'
    return exportDataType === BOOKS ? libraryData[booksKey] : libraryData[magazinesKey]
  }

  return (
    <Dialog open={openState} onClose={onCloseCallback}>
      <DialogTitle>Export</DialogTitle>
      <DialogContent>
        <div>
          <FormControlLabel
            control={
              <Switch
                onChange={() => {
                  const type = exportDataType === BOOKS ? MAGAZINES : BOOKS
                  setExportDataType(type)
                }}
                color='primary'
              />}
            label={exportDataType}
          />
          <br/>
          <FormControlLabel
            control={
              <Switch
                onChange={() => {
                  setIsFullDataExport(!isFullDataExport)
                }}
                color='primary'
              />}
            label={isFullDataExport ? FULL_DATA : ADDED_DATA_ONLY}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCloseCallback}
        >
          Cancel
        </Button>
        <CSVLink
          data={getDataForExport() || []}
          filename={`new${exportDataType}.csv`}
        >
          <Button
            onClick={() => {}}
            color={'primary'}
            variant={'contained'}
          >
            DOWNLOAD
          </Button>
        </CSVLink>
      </DialogActions>
    </Dialog>
  )
}

export default ExportDataDialog
