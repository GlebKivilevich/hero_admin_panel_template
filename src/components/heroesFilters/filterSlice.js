import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { useHttp } from '../../hooks/http.hook';

const initialState = {
  filters: [],
  elementHero: 'Все',
  filterLoadingStatus: 'idle',
};

export const fetchFilters = createAsyncThunk('filters/fetchFilter', () => {
  const { request } = useHttp();
  return request('https://63d3e39a8d4e68c14eb51d84.mockapi.io/filter');
});

const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    elementFilter: (state, action) => {
      state.elementHero = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilters.pending, (state) => {
        state.filterLoadingStatus = 'loading';
      })
      .addCase(fetchFilters.fulfilled, (state, action) => {
        state.filters = action.payload;
        state.filterLoadingStatus = 'idle';
      })
      .addCase(fetchFilters.rejected, (state) => {
        state.filterLoadingStatus = 'error';
      });
  },
});
const { actions, reducer } = filterSlice;

export default reducer;
export const { filterFetching, filterFetched, filterError, elementFilter } = actions;
