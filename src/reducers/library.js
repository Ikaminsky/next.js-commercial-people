import { ADD_NEW_DATA, SET_LIBRARY_DATA } from '../actions/library'
import { BOOK } from '../components/Library/config'

const initialState = {
  fullData: [],
  magazines: [],
  books: [],
  newMagazines: [],
  newBooks: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_LIBRARY_DATA:
      return {
        ...state, ...action.payload
      }
    case ADD_NEW_DATA:
      const newState = { ...state }
      newState.fullData.push(action.payload.newFullDataItem)
      const currentAdditionType = action.payload.newAddition.type === BOOK ? 'books' : 'magazines'
      const newAdditionType = currentAdditionType === 'books' ? 'newBooks' : 'newMagazines'
      newState[currentAdditionType].push(action.payload.newAddition.data)
      newState[newAdditionType] ? newState[newAdditionType].push(action.payload.newAddition.data) : newState[newAdditionType] = [action.payload.newAddition.data]
      return {
        ...state, ...newState
      }
    default:
      return state
  }
}
