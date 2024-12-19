import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
}

interface AboutState {
  teamMembers: TeamMember[];
  isLoading: boolean;
  error: string | null;
}

const initialState: AboutState = {
  teamMembers: [],
  isLoading: false,
  error: null,
};

const aboutSlice = createSlice({
  name: 'about',
  initialState,
  reducers: {
    fetchTeamStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchTeamSuccess: (state, action: PayloadAction<TeamMember[]>) => {
      state.isLoading = false;
      state.teamMembers = action.payload;
    },
    fetchTeamFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchTeamStart, fetchTeamSuccess, fetchTeamFailure } = aboutSlice.actions;
export default aboutSlice.reducer;
