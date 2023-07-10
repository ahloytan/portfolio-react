import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { 
    isDarkMode: false,
    loading: true
   },
  reducers: {
    toggleInput: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
    toggleLoadingScreen: (state, action) => {
      state.loading = action.payload;
    }
  },
});

export const { toggleInput, toggleLoadingScreen } = appSlice.actions;

const reducer = {
  app: appSlice.reducer,
  // other reducers...
};

const store = configureStore({
  reducer: reducer,
});

export default store;
