// TODO:
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных
// Фильтры должны отображать только нужных героев при выборе
// Активный фильтр имеет класс active
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { heroesFilterFetching, heroesFilter, heroesFilterError, elementHeroFilter } from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
  const { filters, filterLoadingStatus, elementHero } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { request } = useHttp();
  // console.log('filters >> ', filters);
  useEffect(() => {
    dispatch(heroesFilterFetching());
    request('https://63d3e39a8d4e68c14eb51d84.mockapi.io/filter')
      .then((filterData) => dispatch(heroesFilter(filterData)))
      .catch(dispatch(heroesFilterError()));
  }, []);

  if (filterLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (filterLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const handleClick = (filter) => {
    dispatch(elementHeroFilter(filter));
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.map((item) => {
            switch (item.filter) {
              case 'Все':
                return (
                  <button
                    onClick={() => handleClick(item.filter)}
                    className={`btn btn-outline-dark ${elementHero === item.filter && 'active'} `}
                    key={item.id}
                  >
                    {item.filter}
                  </button>
                );
              case 'Огонь':
                return (
                  <button
                    onClick={() => handleClick(item.filter)}
                    className={`btn btn-danger ${elementHero === item.filter && 'active'} `}
                    key={item.id}
                  >
                    {item.filter}
                  </button>
                );
              case 'Вода':
                return (
                  <button
                    onClick={() => handleClick(item.filter)}
                    className={`btn btn btn-primary ${elementHero === item.filter && 'active'}`}
                    key={item.id}
                  >
                    {item.filter}
                  </button>
                );
              case 'Ветер':
                return (
                  <button
                    onClick={() => handleClick(item.filter)}
                    className={`btn btn-success ${elementHero === item.filter && 'active'}`}
                    key={item.id}
                  >
                    {item.filter}
                  </button>
                );
              case 'Земля':
                return (
                  <button
                    onClick={() => handleClick(item.filter)}
                    className={`btn btn-secondary ${elementHero === item.filter && 'active'}`}
                    key={item.id}
                  >
                    {item.filter}
                  </button>
                );

              default:
                return '';
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
