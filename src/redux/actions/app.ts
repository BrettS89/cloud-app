import { ActionTypes, Action, ActionNoPayload } from './types';
import { App } from '../../types';

export const setAppData: Action<App> = (payload) => ({
  type: ActionTypes.SET_APP_DATA,
  payload: payload,
});
