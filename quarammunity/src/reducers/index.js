import { combineReducers } from 'redux';
import { loginReducer } from './loginReducer';
import { needsReducer } from './needsReducer';

export const rootReducer = combineReducers({
  currentUser: loginReducer,
  currentNeeds: needsReducer
});