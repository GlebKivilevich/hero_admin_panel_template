import { useHttp } from '../../hooks/http.hook';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { fetchHeroes } from '../../actions';
import HeroesListItem from '../heroesListItem/HeroesListItem';
import Spinner from '../spinner/Spinner';

const HeroesList = () => {
  const filteredHeroesSelector = createSelector(
    (state) => state.filterReducer.elementHero,
    (state) => state.heroes.heroes,
    (filter, heroes) => {
      if (filter === 'Все') {
        return heroes;
      } else {
        return heroes.filter((item) => item.element === filter);
      }
    }
  );
  const filteredHeroes = useSelector(filteredHeroesSelector);

  const { heroesLoadingStatus } = useSelector((state) => state.heroes);
  const dispatch = useDispatch();
  const { request } = useHttp();

  useEffect(() => {
    dispatch(fetchHeroes(request));
    // === ❘❘ ===
    // dispatch(heroesFetching); //heroesFetching()
    // request('https://63d3e39a8d4e68c14eb51d84.mockapi.io/heroes')
    //   .then((data) => dispatch(heroesFetched(data)))
    //   .catch(() => dispatch(heroesFetchingError()));

    // eslint-disable-next-line
  }, []);
  if (heroesLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (heroesLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const renderHeroesList = (arr) => {
    if (arr.length === 0) {
      return <h5 className="text-center mt-5">Героев пока нет</h5>;
    }

    return arr.map(({ id, ...props }) => {
      return <HeroesListItem key={id} {...props} id={id} />;
    });
  };

  const elements = renderHeroesList(filteredHeroes);
  return <ul>{elements}</ul>;
};

export default HeroesList;
