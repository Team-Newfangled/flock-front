import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  result: [
    {
      color: "#8173D1",
      completed: false,
      content: "하하하",
      "start-date": "2022-10-08",
      "end-date": "2022-10-08",
      id: 0,
      "writer_id": 0
    }
  ]
}

const deadlineData = createSlice({
  name: "deadline",
  initialState,
  reducers: {
    getState: (state, action) => {
      state.value = action.payload
    },
    setState: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { getState, setState } = deadlineData.actions;
export default deadlineData.reducer;