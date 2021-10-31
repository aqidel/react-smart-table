import { configureStore } from '@reduxjs/toolkit';
import sliceReducer from '../feautures/slice';

export default configureStore({
  reducer: {
    sliceReducer: sliceReducer,
  },
})