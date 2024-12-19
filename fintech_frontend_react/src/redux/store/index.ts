import { configureStore } from '@reduxjs/toolkit';
import authSlice from '../features/auth/authSlice.ts';
import homeSlice from '../features/home/homeSlice.ts';
import aboutSlice from '../features/about/aboutSlice.ts';
const store = configureStore({
  reducer: {
    auth: authSlice,
    home: homeSlice,
    about: aboutSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
