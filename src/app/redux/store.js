import { configureStore } from '@reduxjs/toolkit';
import matrixReducer from './matrixReducer';
// import findReducer from './findReducer';

export const store = configureStore({
  reducer: {
    matrix: matrixReducer,
    // find: findReducer,
  },
});
