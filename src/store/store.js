import { configureStore } from '@reduxjs/toolkit';
import userData from './users/userData';
import deadlineData from "./deadline/deadlineData";
import modalData from './modal/modalData';
import todoModal from './modal/todoModal';
import isRoleData from './users/isRoleData';

export default configureStore({
  reducer: {
    user: userData,
    deadline: deadlineData,
    modal: modalData,
    todoModal: todoModal,
    isRoleData: isRoleData
  },
})