import { createStore, combineReducers } from 'redux';
import heroesReducer from '../reducers/heroesReducer';
import filterReducer from '../reducers/filterReducer';

const store = createStore(
  combineReducers({ heroesReducer, filterReducer }),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
