import { stringRegex } from '@/lib/function/stringRegex'
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: {},
  userId: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    insertUsers: (state, action) => {
      state.user = action.payload
      state.userId = stringRegex(action.payload.email)
    }
  }
})

export default userSlice.reducer
