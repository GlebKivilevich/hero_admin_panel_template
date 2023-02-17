import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { elementFilter, fetchFilters } from './filterSlice';
import { useHttp } from '../../hooks/http.hook';
import Spinner from '../spinner/Spinner';

const HeroesFilters = () => {
  const { filters, filterLoadingStatus, elementHero } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  const { request } = useHttp();
  useEffect(() => {
    dispatch(fetchFilters());
    // === ❘❘ ====
    // dispatch(filterFetching());
    // request('https://63d3e39a8d4e68c14eb51d84.mockapi.io/filter')
    //   .then((filterData) => dispatch(filterFetched(filterData)))
    //   .catch(dispatch(filterError()));
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
