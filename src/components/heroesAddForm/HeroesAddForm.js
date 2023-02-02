import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createHeroes } from '../../actions';
import { v4 as uuid } from 'uuid';

// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

const HeroesAddForm = () => {
  const [nameHero, setNameHero] = useState('');
  const [descriptionHero, setDescriptionHero] = useState('');
  const [elementHero, setElementHero] = useState('');

  const heroes = useSelector(state => state.heroes);
//   console.log(heroes);
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
    if (nameHero.length > 5 && descriptionHero.length > 5) {
      const objHero = {
        id: uuid(),
        name: nameHero,
        description: descriptionHero,
        element: elementHero,
      };

      dispatch(createHeroes(objHero));
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
          <option value="fire">Огонь</option>
          <option value="water">Вода</option>
          <option value="wind">Ветер</option>
          <option value="earth">Земля</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary" onClick={createNewHero}>
        Создать
      </button>
    </form>
  );
};

export default HeroesAddForm;
