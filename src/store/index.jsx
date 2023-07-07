import { configureStore, createSlice } from '@reduxjs/toolkit';

const appSlice = createSlice({
  name: 'app',
  initialState: { isDarkMode: false },
  reducers: {
    toggleInput: (state) => {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export const { toggleInput } = appSlice.actions;

const reducer = {
  app: appSlice.reducer,
  // other reducers...
};

const store = configureStore({
  reducer: reducer,
});

export default store;
