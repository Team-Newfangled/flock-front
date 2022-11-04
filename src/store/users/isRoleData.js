import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  role: false,
};

const isRoleData = createSlice({
  name: 'isRoleData',
  initialState,
  reducers: {
    roleTrue: (state) => {
      state.role = true;
    },
    roleFalse: (state) => {
      state.role = false;
    }
  }
})

export const { roleTrue, roleFalse } = isRoleData.actions;
export default isRoleData.reducer;