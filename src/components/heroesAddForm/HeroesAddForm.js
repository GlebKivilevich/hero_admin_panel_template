import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createHeroes } from '../heroesList/heroesSlice';
import { v4 as uuid } from 'uuid';

const HeroesAddForm = () => {
  const [nameHero, setNameHero] = useState('');
  const [descriptionHero, setDescriptionHero] = useState('');
  const [elementHero, setElementHero] = useState('');

  const { filters } = useSelector((state) => state.filters);
  const dispatch = useDispatch();

  const handleNameHero = (e) => {
    e.preventDefault();
    setNameHero(e.target.value);
  };
  const handleDescriptionHero = (e) => {
    e.preventDefault();
    setDescriptionHero(e.target.value);
  };
  const handleElementHero = (e) => {
    e.preventDefault();
    setElementHero(e.target.value);
  };

  const createNewHero = (e) => {
    e.preventDefault();
    if (nameHero.length >= 3 && descriptionHero.length >= 10 && elementHero) {
      const objHero = {
        id: uuid(),
        name: nameHero,
        description: descriptionHero,
        element: elementHero,
      };
      dispatch(createHeroes(objHero));

      setTimeout(() => {
        setNameHero('');
        setDescriptionHero('');
        setElementHero('');
      }, 250);
    }
  };

  return (
    <form className="border p-4 shadow-lg rounded">
      <div className="mb-3">
        <label htmlFor="name" className="form-label fs-4">
          Имя нового героя
        </label>
        <input
          required
          type="text"
          name="name"
          className="form-control"
          id="name"
          placeholder="Как меня зовут?"
          value={nameHero}
          onChange={handleNameHero}
        />
        <p className={`${nameHero.length < 3 ? 'text-danger' : 'text-success'}`}>Минимум 3 символа!</p>
      </div>

      <div className="mb-3">
        <label htmlFor="text" className="form-label fs-4">
          Описание
        </label>
        <textarea
          required
          name="text"
          className="form-control"
          id="text"
          placeholder="Что я умею?"
          style={{ height: '130px' }}
          value={descriptionHero}
          onChange={handleDescriptionHero}
        />
        <p className={`${descriptionHero.length < 10 ? 'text-danger' : 'text-success'}`}>Минимум 10 символов!</p>
      </div>

      <div className="mb-3">
        <label htmlFor="element" className="form-label">
          Выбрать элемент героя
        </label>

        <select
          required
          className="form-select"
          id="element"
          name="element"
          value={elementHero}
          onChange={handleElementHero}
        >
          <option>Я владею элементом...</option>
          {filters &&
            filters.map((item) => {
              return (
                item.label !== 'Все' && (
                  <option className={item.className} key={item.id} value={item.label}>
                    {item.label}
                  </option>
                )
              );
            })}
        </select>
        <p className={`${!elementHero ? 'text-danger' : 'text-success'}`}>Выберете героя!</p>
      </div>
      <button type="submit" className="btn btn-primary" onClick={createNewHero}>
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
