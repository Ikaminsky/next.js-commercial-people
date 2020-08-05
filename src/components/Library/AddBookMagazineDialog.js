import React, { useState } from 'react'
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Switch,
  FormControlLabel,
  Button, TextField
} from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { BOOK, MAGAZINE, addBookMagazineTextFields } from './config'
import { MODAL_STYLES } from '../../utils/consts'
import { addNewData } from '../../actions/library'

const AddBookMagazineDialog = ({ openState = false, onCloseCallback }) => {
  const [additionType, setAdditionType] = useState(BOOK)
  const [newBookMagazineData, setNewBookMagazineData] = useState({
    title: '',
    isbn: '',
    authors: '',
    publishedAt: '',
    description: ''
  })
  const dispatch = useDispatch()

  const validationSuccess = () => (
    newBookMagazineData.title && newBookMagazineData.isbn && newBookMagazineData.authors &&
    (newBookMagazineData.publishedAt || newBookMagazineData.description))

  return (
    <Dialog open={openState} onClose={onCloseCallback}>
      <DialogTitle>Add new</DialogTitle>
      <DialogContent>
        <FormControlLabel
          control={
            <Switch
              onChange={() => {
                const type = additionType === BOOK ? MAGAZINE : BOOK
                setAdditionType(type)
                setNewBookMagazineData({ ...newBookMagazineData, publishedAt: '', description: '' })
              }}
              color='primary'
            />}
          label={additionType}
        />
        <br/>
        {addBookMagazineTextFields.map((item, index) => (
          !item.switchable || (item.switchable && additionType === item.conditionalKey) ? <TextField
            key={`add-book-magazine-text-field-${index}`}
            onChange={(e) => {
              setNewBookMagazineData({ ...newBookMagazineData, [item.key]: e.target.value })
            }}
            value={newBookMagazineData[item.key]}
            placeholder={item.placeholder}
            style={MODAL_STYLES}
          /> : ''
        ))}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={onCloseCallback}
        >
          Cancel
        </Button>
        <Button
          onClick={() => {
            if (!validationSuccess()) {
              return
            }
            dispatch(addNewData(newBookMagazineData, additionType))
            onCloseCallback()
          }}
          color={'primary'}
          variant={'contained'}
          disabled={!validationSuccess()}
        >
          Add
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default AddBookMagazineDialog
