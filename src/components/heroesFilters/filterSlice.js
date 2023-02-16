import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filters: [],
  elementHero: 'Все',
  filterLoadingStatus: 'idle',
};

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    filterFetching: (state) => {
      state.filterLoadingStatus = 'loading';
    },
    filterFetched: (state, action) => {
      state.filters = action.payload;
      state.filterLoadingStatus = 'idle';
    },
    filterError: (state) => {
      state.filterLoadingStatus = 'error';
    },
    elementFilter: (state, action) => {
      state.elementHero = action.payload;
    },
  },
});
const {actions, reducer} = filterSlice;

export default reducer;
export const { filterFetching, filterFetched, filterError, elementFilter } = actions;
