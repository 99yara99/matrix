import { configureStore } from '@reduxjs/toolkit';
import matrixReducer from './matrixReducer';

const store = configureStore({
  reducer: {
    matrix: matrixReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
