import { createReducer } from '@reduxjs/toolkit';
import { heroesFetching, heroesFetched, heroesFetchingError, createHeroes, deletHeroes } from '../actions';

const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

const heroes = createReducer(
  initialState,
  {
    [heroesFetching]: (state) => {
      state.heroesLoadingStatus = 'loading';
    },
    [heroesFetched]: (state, action) => {
      state.heroesLoadingStatus = 'idle';
      state.heroes = action.payload;
    },
    [heroesFetchingError]: (state) => {
      state.heroesLoadingStatus = 'error';
    },
    [createHeroes]: (state, action) => {
      state.heroes.push(action.payload);
    },
    [deletHeroes]: (state, action) => {
      state.heroes = state.heroes.filter((item) => item.id !== action.payload);
    },
  },
  [],
  (state) => state
);

// === ||, НО НЕ БУДЕТ РАБОТАТЬ С TypeSscript===

// const heroes = createReducer(initialState, (builder) => {
//   builder
//     .addCase(heroesFetching, (state) => {
//       state.heroesLoadingStatus = 'loading';
//     })
//     .addCase(heroesFetched, (state, action) => {
//       state.heroesLoadingStatus = 'idle';
//       state.heroes = action.payload;
//     })
//     .addCase(heroesFetchingError, (state) => {
//       state.heroesLoadingStatus = 'error';
//     })
//     .addCase(createHeroes, (state, action) => {
//       state.heroes.push(action.payload);
//     })
//     .addCase(deletHeroes, (state, action) => {
//       state.heroes = state.heroes.filter((item) => item.id !== action.payload);
//     })
//     .addDefaultCase(() => {});
// });

// const heroesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'HEROES_FETCHING':
//       return {
//         ...state,
//         heroesLoadingStatus: 'loading',
//       };

//     case 'HEROES_FETCHED':
//       const heroes = action.payload;

//       return {
//         ...state,
//         heroes,
//         heroesLoadingStatus: 'idle',
//       };

//     case 'HEROES_FETCHING_ERROR':
//       return {
//         ...state,
//         heroesLoadingStatus: 'error',
//       };

//     case 'HEROES_DELETE':
//       return (function () {
//         const { id } = action;
//         const { heroes } = state;

//         return {
//           ...state,
//           heroes: heroes.filter((item) => item.id !== id),
//         };
//       })();

//     case 'HEROES_CREATE':
//       return (function () {
//         const { heroes } = state;
//         const { data } = action;
//         return {
//           ...state,
//           heroes: [...heroes, data],
//         };
//       })();
//     default:
//       return state;
//   }
// };

export default heroes;
