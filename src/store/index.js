import { createStore, combineReducers } from 'redux';

import title from './reducers/title';

const combinedReducers = combineReducers({
  title,
});

const store = createStore(combinedReducers);

export default store;
