import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface UserI {
  uid: string,
  token: string,
}

let userL: UserI

let localUser = localStorage.getItem('user')

if (localUser !== null) {
  userL = JSON.parse(localUser)
  console.log(userL)
} else {
  userL = {
    uid: '',
    token: '',
  }
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: userL,
  },
  reducers: {
    setUser: (state, actions: PayloadAction<UserI>) => {
      state.user = actions.payload
    }
  }
})

export const { setUser } = authSlice.actions

export const auth = (state: { auth: { user: UserI } }) => state

export default authSlice.reducer
