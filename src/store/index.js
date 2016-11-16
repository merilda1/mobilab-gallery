import { createStore, combineReducers } from 'redux';
import Gallery from './reducers/Gallery';

const combinedReducers = combineReducers({
  gallery: Gallery,
});

const store = createStore(combinedReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
