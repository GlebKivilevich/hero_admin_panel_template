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
import { heroesFilterFetching, heroesFilter, heroesFilterError } from '../../actions';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
  const { filter, filterLoadingStatus } = useSelector((state) => state);
  const dispatch = useDispatch();

  const { request } = useHttp();

  useEffect(async () => {
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

  return (
    <div className="card shadow-lg mt-4">
      <div className="card-body">
        <p className="card-text">Отфильтруйте героев по элементам</p>
        <div className="btn-group">
          {filter &&
            filter.map((item) => {
              switch (item.filter) {
                case 'all':
                  return (
                    <button className="btn btn-outline-dark active" key={item.id}>
                      Все
                    </button>
                  );
                case 'fire':
                  return (
                    <button className="btn btn-danger" key={item.id}>
                      Огонь
                    </button>
                  );
                case 'water':
                  return (
                    <button className="btn btn btn-primary " key={item.id}>
                      Вода
                    </button>
                  );
                case 'wind':
                  return (
                    <button className="btn btn-success" key={item.id}>
                      Ветер
                    </button>
                  );
                case 'earth':
                  return (
                    <button className="btn btn-secondary" key={item.id}>
                      Земля
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
