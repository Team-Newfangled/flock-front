import { createSlice } from "@reduxjs/toolkit";
import { editProfile } from "./editProfile";

const access_token = localStorage.getItem('access_token')
const user_id = localStorage.getItem('user_id')

const initialState = {
  loading: false,
  userInfo: {
    nickname: "", 
    image: "",
    company: ""
  },
  access_token,
  user_id
}

const userData = createSlice({
  name: 'user',
  initialState: { value: initialState },
  reducers: {
    userlogin: (state, action) => {
      state.value.user_id = action.payload.user_id
      state.value.access_token = action.payload.access_token
    },
    userlogout: (state) => {
      state.value = initialState
    },
    getUserInfo: (state, action) => {
      state.value.userInfo = action.payload
    }
  },
  extraReducers:  (builder) => {
    builder
      .addCase(editProfile.pending, (state) => {
        state.value.loading = true
      })
      .addCase(editProfile.fulfilled, (state, action) => {
        state.value.loading = false
        state.value.userInfo = action.payload
      })
  }
});

export const { userlogin, userlogout, getUserInfo } = userData.actions;
export default userData.reducer;