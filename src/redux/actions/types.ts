export enum ActionTypes {
  ON_APP_LOAD = 'ON_APP_LOAD',
  GET_APPS = 'LOGIN',
  SIGNUP = 'SIGNUP',
  SET_APP_DATA = 'SET_APP_DATA',
  CREATE_APP = 'CREATE_APP',
  ADD_ENV_VAR = 'ADD_ENV_VAR',
};

interface ActionReturn<T> {
  type: string;
  payload: T;
}

export type Action<T> = (payload: T) => ActionReturn<T>;
export type ActionNoPayload = () => { type: string }
