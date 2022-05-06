import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: '',
  reducers: {
    setMessage(state, action) {
      return action.payload
    },
    removeMessage(state, action) {
      return ''
    }
  }
})

export const { setMessage, removeMessage } = notificationSlice.actions

export const setNotification = (content, time) => {
  return async dispatch => {
    dispatch(setMessage(content))
    setTimeout(() => {
      dispatch(removeMessage(''))
    }, 1000*time)
  }
} 

export default notificationSlice.reducer
