// TODO:
// Задача для этого компонента:
// Фильтры должны формироваться на основании загруженных данных +
// Фильтры должны отображать только нужных героев при выборе +
// Активный фильтр имеет класс active +
// Изменять json-файл для удобства МОЖНО!
// Представьте, что вы попросили бэкенд-разработчика об этом

import axios from 'axios';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { filterFetching, filterFetched, filterError, elementFilter } from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
  const { filters, filterLoadingStatus, elementHero } = useSelector((state) => state.filterReducer ); //state.filters
  
  const dispatch = useDispatch();

  const { request } = useHttp();
  useEffect(() => {
    dispatch(filterFetching());
    request('https://63d3e39a8d4e68c14eb51d84.mockapi.io/filter')
      .then((filterData) => dispatch(filterFetched(filterData)))
      .catch(dispatch(filterError()));
  }, []);

  if (filterLoadingStatus === 'loading') {
    return <Spinner />;
  } else if (filterLoadingStatus === 'error') {
    return <h5 className="text-center mt-5">Ошибка загрузки</h5>;
  }

  const handleClick = (filter) => {
    dispatch(elementFilter(filter));
  };

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filters.map((item) => {
            return (
              <button
                onClick={() => handleClick(item.label)}
                className={`btn ${item.className} ${elementHero === item.label && 'active'} `}
                key={item.id}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroesFilters;
