import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    showSearch: false,
  },
  reducers: {
    setShowSearch: (state, action) => {
        state.showSearch = action.payload.showSearch;
    },
  },
});

export const { setShowSearch } = appSlice.actions;

export const selectChannelId = state => state.app.channelId;
export const selectChannelName = state => state.app.channelName;

export default appSlice.reducer;
