import { ActionTypes, Action } from './types';

export const onAppLoad: Action<any> = (payload) => ({
  type: ActionTypes.ON_APP_LOAD,
  payload: payload,
});
