import { configureStore } from '@reduxjs/toolkit';
import userData from './users/userData';
import deadlineData from "./deadline/deadlineData";
import modalData from './modal/modalData';

export default configureStore({
  reducer: {
    user: userData,
    deadline: deadlineData,
    modal: modalData
  },
})