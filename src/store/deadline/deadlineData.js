import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  results: [
    {
      color: "#8173D1",
      completed: false,
      content: "공주",
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
      state.results = action.payload
    }
  }
})

export const { getState } = deadlineData.actions;
export default deadlineData.reducer;