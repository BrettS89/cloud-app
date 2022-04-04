import { Reducer } from 'redux';
import { ActionTypes } from '../actions';

interface Action {
  type: ActionTypes;
  payload: any;
}

export interface GeneralState {
  isLoading: boolean;
}

const INITIAL_STATE: GeneralState = {
  isLoading: false,
};

export const generalReducer: Reducer<GeneralState, Action> = (state = INITIAL_STATE, { type, payload }) => {
  switch(type) {

    default:
      return state;
  }
};
