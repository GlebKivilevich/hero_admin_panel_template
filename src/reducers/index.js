import axios from 'axios';
const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  filterLoadingStatus: 'idle',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };

    case 'HEROES_FETCHED':
      return {
        ...state,
        heroes: action.payload,
        heroesLoadingStatus: 'idle',
      };

    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };

    case 'HEROES_FILTER_FETCHING':
      return {
        ...state,
        filterLoadingStatus: 'loading',
      };

    case 'HEROES_FILTER':
      return {
        ...state,
        filter: action.dataFilter,
        filterLoadingStatus: "idle"
      };

    case 'HEROES_FILTER_ERROR':
      return {
        ...state,
        filterLoadingStatus: 'error',
      };

    case 'HEROES_DELETE':
      return (function () {
        const { id } = action;
        const { heroes } = state;
        // fetch(`https://63d3e39a8d4e68c14eb51d84.mockapi.io/heroes/id=${id}`, {method: "DELETE"});
        const newHeroes = heroes.filter((item) => item.id !== id);

        return {
          ...state,
          heroes: newHeroes,
        };
      })();

    case 'HEROES_CREATE':
      return (function () {
        const { heroes } = state;
        const { data } = action;

        return {
          ...state,
          heroes: [...heroes, data],
        };
      })();

    default:
      return state;
  }
};

export default reducer;
