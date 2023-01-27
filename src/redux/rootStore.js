import { api } from './apiRtk';
import { combineReducers } from 'redux';

export default combineReducers({
  [api.reducerPath]: api.reducer,
  // remaining reducers
});