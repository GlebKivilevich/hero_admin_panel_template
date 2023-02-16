import { heroesFetching, heroesFetched, heroesFetchingError } from '../components/heroesList/heroesSlice';
import { filterError, filterFetched, filterFetching } from '../components/heroesFilters/filterSlice';

export const fetchHeroes = (request) => (dispatch) => {
  dispatch(heroesFetching()); //heroesFetching()
  request('https://63d3e39a8d4e68c14eb51d84.mockapi.io/heroes')
    .then((data) => dispatch(heroesFetched(data)))
    .catch(() => dispatch(heroesFetchingError()));
};

export const fetchFilters = (request) => (dispatch) => {
  dispatch(filterFetching());
  request('https://63d3e39a8d4e68c14eb51d84.mockapi.io/filter')
    .then((filterData) => dispatch(filterFetched(filterData)))
    .catch(dispatch(filterError()));
};