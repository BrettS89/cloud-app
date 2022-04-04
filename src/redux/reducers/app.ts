import { Reducer } from 'redux';
import { ActionTypes } from '../actions';
import { App } from '../../types';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface AppState {
  apps: App[];
}

const INITIAL_STATE: AppState = {
  apps: [],
};

export const appReducer: Reducer<AppState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    case ActionTypes.SET_APP_DATA:
      return {
        ...state,
        apps: payload,
      };

    default:
      return state;
  }
};
