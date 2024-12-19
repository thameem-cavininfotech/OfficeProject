import { createSlice, PayloadAction } from '@reduxjs/toolkit';
// import External types examples...
import { AuthState } from './authTypes';
// Internal types examples...
// interface AuthState {
//   isAuthenticated: boolean;
//   token: string | null;
//   user: { name: string } | null;
// }

const initialState: AuthState = {
  isAuthenticated: false,
  token: null,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<{ token: string; user: { name: string } }>) => {
      state.isAuthenticated = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.token = null;
      state.user = null;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
