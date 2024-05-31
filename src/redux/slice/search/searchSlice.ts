import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SearchState {
  recentSearches: string[];
}

const initialState: SearchState = {
  recentSearches: ['Miami', 'New York'],
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    addSearch: (state, action: PayloadAction<string>) => {
      const newSearch = action.payload;
      state.recentSearches = [newSearch, ...state.recentSearches.filter(term => term !== newSearch)].slice(0, 5);
    },
  },
});

export const { addSearch } = searchSlice.actions;
export default searchSlice.reducer;
