// create store using legacy_createStore
// Don't use combineReducer
import {legacy_createStore} from 'redux';
import { reducer } from './reducer';

export const store = legacy_createStore(reducer);

// NOTE: Do not remove this code,its used for calculating your score, if removed it will give you zero marks
if (window.Cypress) {
  window.store = store;
}
