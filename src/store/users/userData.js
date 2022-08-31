import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  nickname: "", 
  image: "",
  company: ""
}

const userData = createSlice({
  name: 'user',
  initialState: { value: initialState },
  reducers: {
    userlogin: (state, action) => {
      state.value = action.payload
    },
    userlogout: (state) => {
      state.value = initialState
    }
  }
});

export const { userlogin, userlogout } = userData.actions;
export default userData.reducer;