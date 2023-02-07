const initialState = {
  heroes: [],
  heroesLoadingStatus: 'idle',
  filters: [],
  filterHero: [],
  elementHero: 'Все',
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
      const { payload, filter } = action;
      const { elementHero, heroes } = state;
      const filterElementHero = elementHero === 'Все' ? payload : heroes.filter((item) => item.element === filter);
      return {
        ...state,
        heroes: payload,
        filterHero: filterElementHero,
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
        filters: action.dataFilter,
        filterLoadingStatus: 'idle',
      };

    case 'HEROES_FILTER_ERROR':
      return {
        ...state,
        filterLoadingStatus: 'error',
      };

    case 'HEROES_DELETE':
      return (function () {
        const { id } = action;
        const { heroes, filterHero } = state;

        const delleteHeroesFil = filterHero.filter((item) => item.id !== id);
        const delleteHeroes = heroes.filter((item) => item.id !== id);

        return {
          ...state,
          filterHero: delleteHeroesFil,
          heroes: delleteHeroes,
        };
      })();

    case 'HEROES_CREATE':
      return (function () {
        const { heroes, elementHero } = state;
        const { data } = action;

        const createHero = [...heroes, data];
        return {
          ...state,
          heroes: createHero,
          filterHero: elementHero === 'Все' ? createHero : createHero.filter((item) => item.element === elementHero),
        };
      })();

    case 'ELEMENT_HERO_FILTER':
      return (function () {
        const { heroes, filterHero, elementHero } = state;
        const { filter } = action;

        const filterElementHero = filter === 'Все' ? heroes : heroes.filter((item) => item.element === filter);

        return {
          ...state,
          filterHero: filterElementHero,
          elementHero: filter,
        };
      })();

    default:
      return state;
  }
};

export default reducer;
