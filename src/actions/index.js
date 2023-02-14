// ====Heroes=====
export const heroesFetching = () => {
  return {
    type: 'HEROES_FETCHING',
  };
};

export const heroesFetched = (hero, filter) => {
  return {
    type: 'HEROES_FETCHED',
    hero,
    filter,
  };
};

export const heroesFetchingError = () => {
  return {
    type: 'HEROES_FETCHING_ERROR',
  };
};

export const deletHeroes = (id) => {
  return {
    type: 'HEROES_DELETE',
    id,
  };
};

export const createHeroes = (data) => {
  return {
    type: 'HEROES_CREATE',
    data,
  };
};

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
