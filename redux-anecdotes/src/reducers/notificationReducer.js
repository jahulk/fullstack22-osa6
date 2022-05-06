import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  id: null,
  message: ''
}
const notificationSlice = createSlice({
  name: 'notification',
  initialState: initialState,
  reducers: {
    setMessage(state, action) {
      return {...state, message: action.payload}
    },
    removeMessage(state, action) {
      return {...state, message: ''}
    },
    setTimeId(state, action) {
      return { ...state, id: action.payload }
    },
    resetPreviousTimeout(state, action) {
      clearTimeout(state.id)
      return state
    }
  }
})

export const { setMessage, removeMessage, setTimeId, resetPreviousTimeout } = notificationSlice.actions

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(resetPreviousTimeout())
    dispatch(setMessage(content))
    const id = setTimeout(() => {
      dispatch(removeMessage())
    }, 1000*time)
    dispatch(setTimeId(id))
  }
} 

export default notificationSlice.reducer
