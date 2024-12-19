import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface Article {
  id: number;
  title: string;
  content: string;
}

interface HomeState {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
}

const initialState: HomeState = {
  articles: [],
  isLoading: false,
  error: null,
};

const homeSlice = createSlice({
  name: 'home',
  initialState,
  reducers: {
    fetchArticlesStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchArticlesSuccess: (state, action: PayloadAction<Article[]>) => {
      state.isLoading = false;
      state.articles = action.payload;
    },
    fetchArticlesFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchArticlesStart, fetchArticlesSuccess, fetchArticlesFailure } = homeSlice.actions;
export default homeSlice.reducer;
