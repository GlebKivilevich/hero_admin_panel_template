const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
};

const heroesReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'HEROES_FETCHING':
      return {
        ...state,
        heroesLoadingStatus: 'loading',
      };

    case 'HEROES_FETCHED':
      const { hero } = action;
      return {
        ...state,
        heroes: hero,
        heroesLoadingStatus: 'idle',
      };

    case 'HEROES_FETCHING_ERROR':
      return {
        ...state,
        heroesLoadingStatus: 'error',
      };

    case 'HEROES_DELETE':
      return (function () {
        const { id } = action;
        const { heroes } = state;

        return {
          ...state,
          heroes: heroes.filter((item) => item.id !== id),
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

export default heroesReducer;
