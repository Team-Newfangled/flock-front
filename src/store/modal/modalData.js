import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  show: false,
};

const modalData = createSlice({
  name: 'modalData',
  initialState,
  reducers: {
    showModal: (state) => {
      state.show = true;
    },
    dropModal: (state) => {
      state.show = false;
    }
  }
})

export const { showModal, dropModal } = modalData.actions;
export default modalData.reducer;