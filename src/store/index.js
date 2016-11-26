import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import Gallery from './reducers/Gallery';
import Actions from './Actions';

const combinedReducers = combineReducers({
  gallery: Gallery,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(combinedReducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

store.dispatch(Actions.fetchGallery('HOT', 0, true, 'viral'));

export default store;
