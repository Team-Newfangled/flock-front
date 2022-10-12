import { configureStore } from '@reduxjs/toolkit';
import userData from './users/userData';
import deadlineData from "./deadline/deadlineData";

export default configureStore({
  reducer: {
    user: userData,
    deadline: deadlineData
  },
})