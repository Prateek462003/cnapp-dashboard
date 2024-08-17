import { configureStore } from '@reduxjs/toolkit';
import dashboardReducer from './slices/dashboardSlice';
import searchReducer from './slices/searchSlice'

const store = configureStore({
  reducer: {
    dashboard: dashboardReducer,
    search: searchReducer,
  },
});

export default store;
