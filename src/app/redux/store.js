import { configureStore } from '@reduxjs/toolkit';
import matrixReducer from './reducer';

export const store = configureStore({
  reducer: {
    matrix: matrixReducer,
  },
});
