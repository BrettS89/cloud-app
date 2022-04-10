import { ActionTypes, Action, ActionNoPayload } from './types';
import { App } from '../../types';

export const setAppData: Action<App[]> = (payload) => ({
  type: ActionTypes.SET_APP_DATA,
  payload,
});

export const createApp: Action<any> = (payload) => ({
  type: ActionTypes.CREATE_APP,
  payload,
});

export const addEnvVar: Action<{ appId: string, envVar: string }> = (payload) => ({
  type: ActionTypes.ADD_ENV_VAR,
  payload,
});

export const getOneApp: Action<string> = (payload) => ({
  type: ActionTypes.GET_ONE_APP,
  payload,
});
