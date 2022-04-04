export enum ActionTypes {
  ON_APP_LOAD = 'ON_APP_LOAD',
  GET_APPS = 'LOGIN',
  SIGNUP = 'SIGNUP',
  SET_APP_DATA = 'SET_APP_DATA',
};

interface ActionReturn<T> {
  type: string;
  payload: T;
}

export type Action<T> = (payload: T) => ActionReturn<T>;
export type ActionNoPayload = () => { type: string }
