import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  show: false,
  name: '',
  id: 0,
  manager: 0,
};

const todoModal = createSlice({
  name: 'todoModal',
  initialState,
  reducers: {
    showTodoModal: (state, action) => {
      state.name = action.payload.text;
      state.id = action.payload.id;
      state.manager = action.payload.manager;
      state.show = true;
    },
    dropTodoModal: (state) => {
      state.show = false;
    }
  }
})

export const { showTodoModal, dropTodoModal } = todoModal.actions;
export default todoModal.reducer;