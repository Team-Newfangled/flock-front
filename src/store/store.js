import { configureStore } from '@reduxjs/toolkit';
import userData from './users/userData';

export default configureStore({
  reducer: {
    user: userData
  },
})