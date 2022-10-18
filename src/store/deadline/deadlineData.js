import { createSlice } from "@reduxjs/toolkit"

export const initialState = {
  results: [
    {
      color: "",
      completed: false,
      content: "",
      "start-date": "",
      "end-date": "",
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
      state.results = action.payload
    }
  }
})

export const { getState } = deadlineData.actions;
export default deadlineData.reducer;