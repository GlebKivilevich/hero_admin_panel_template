const initialState = {
  filters: [],
  elementHero: 'Все',
  filterLoadingStatus: 'idle',
};

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FILTER_FETCHING':
      return {
        ...state,
        filterLoadingStatus: 'loading',
      };

    case 'FILTER_FETCHED':
      return {
        ...state,
        filters: action.dataFilter,
        filterLoadingStatus: 'idle',
      };

    case 'FILTER_ERROR':
      return {
        ...state,
        filterLoadingStatus: 'error',
      };

    case 'ELEMENT_FILTER':
      return (function () {
        const { filter } = action;
        return {
          ...state,
          elementHero: filter,
        };
      })();

    default:
      return state;
  }
};

export default filterReducer;
