// store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: {
    isDarkMode: false,
    loading: true,
    expanded: false, // Add the expanded state here
  },
  reducers: {
    toggleInput: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleLoadingScreen: (state, action) => {
      state.loading = action.payload;
    },
    toggleExpanded: (state) => {
      state.expanded = !state.expanded;
    },
  },
});

export const { toggleInput, toggleLoadingScreen, toggleExpanded } = appSlice.actions;

const reducer = {
  app: appSlice.reducer,
  // other reducers...
};

const store = configureStore({
  reducer: reducer,
});

export default store;
