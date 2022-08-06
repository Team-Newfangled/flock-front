import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "", 
  image: "",
  organizaion: ""
}

const userData = createSlice({
  name: 'user',
  initialState: { value: initialState },
  reducers: {
    login: (state, action) => {
      state.value = action.payload
    },
    logout: (state) => {
      state.value = initialState
    }
  }
});

export const { login, logout } = userData.actions;
export default userData.reducer;