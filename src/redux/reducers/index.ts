import { combineReducers } from 'redux';
import { generalReducer, GeneralState } from './general';
import { appReducer, AppState } from './app';

export interface StoreState {
  general: GeneralState;
  app: AppState;
}

export const reducers = combineReducers({
  general: generalReducer,
  app: appReducer,
});
