import { createAction } from "@reduxjs/toolkit";


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

// ====Heroes=====
// export const heroesFetching = () => {
//   return {
//     type: 'HEROES_FETCHING',
//   };
// };

export const heroesFetching = createAction('HEROES_FETCHING');
export const heroesFetched = createAction("HEROES_FETCHED")
// export const heroesFetched = (hero) => {
//   return {
//     type: 'HEROES_FETCHED',
//     hero,
//   };
// };
export const heroesFetchingError = createAction("HEROES_FETCHING_ERROR");

// export const heroesFetchingError = () => {
//   return {
//     type: 'HEROES_FETCHING_ERROR',
//   };
// };
export const deletHeroes = createAction("HEROES_DELETE");
// export const deletHeroes = (id) => {
//   return {
//     type: 'HEROES_DELETE',
//     id,
//   };
// };
export const createHeroes = createAction("HEROES_CREATE");
// export const createHeroes = (data) => {
//   return {
//     type: 'HEROES_CREATE',
//     data,
//   };
// };

// ====Filter=====

export const filterFetching = () => {
  return {
    type: 'FILTER_FETCHING',
  };
};

export const filterFetched = (filter) => {
  return {
    type: 'FILTER_FETCHED',
    dataFilter: filter,
  };
};

export const filterError = () => {
  return {
    type: 'FILTER_ERROR',
  };
};

export const elementFilter = (filter) => {
  return {
    type: 'ELEMENT_FILTER',
    filter,
  };
};

// export const elementFilter = (filter) => (dispatch) => {
//   setTimeout(() => {
//     dispatch({
//       type: 'ELEMENT_FILTER',
//       filter,
//     });
//   }, 500)
// };
