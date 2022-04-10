import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import _cloneDeep from 'lodash/cloneDeep';
import api from '../../../api';
import { ActionTypes, setAppData } from '../../actions';
import { appSelector, StoreState } from '../../index';
import { App, EnvVar } from '../../../types/';

export default [
  getAppsWatcher,
  createAppWatcher,
  addEnvVarWatcher,
  getOneAppWatcher,
];

function * getAppsWatcher() {
  yield takeLatest(ActionTypes.GET_APPS, getAppsHandler);
}

function * createAppWatcher() {
  yield takeLatest(ActionTypes.CREATE_APP, createAppHandler);
}

function * addEnvVarWatcher() {
  yield takeLatest(ActionTypes.ADD_ENV_VAR, addEnvVarHandler);
}

function * getOneAppWatcher() {
  yield takeLatest(ActionTypes.GET_ONE_APP, getOneAppHandler);
}

function * getAppsHandler() {
  try {
    const fn = () => api
      .service('app')
      .find({
        query: {
          $sort: { createdAt: -1 },
          $resolve: { envVars: true },
        }
      });

    const { data } = yield call(fn);

    yield put(setAppData(data));
  } catch(e) {
    console.log(e);
  }
}

interface CreateApp {
  type: ActionTypes.CREATE_APP;
  payload: {
    data: Record<string, any>;
    navigate(_id: string): void;
  }
}

function * createAppHandler({ payload }: CreateApp) {
  try {
    const appState: StoreState['app'] = yield select(appSelector);

    const fn = () => api
      .service('app')
      .create(payload.data);

    const createdApp: App = yield call(fn);
    const updatedAppState = [...appState.apps, createdApp];
    yield put(setAppData(updatedAppState));

    payload.navigate(createdApp._id);
  } catch(e) {
    if (e instanceof Error) {
      alert(e.message);
    } else {
      alert('Something went wrong');
    }
  }
}

interface AddEnvVar {
  type: ActionTypes.ADD_ENV_VAR;
  payload: {
    appId: string;
    envVar: string;
  };
}

function * addEnvVarHandler({ payload }: AddEnvVar) {
  try {
    const appState: StoreState['app'] = yield select(appSelector);

    const fn = () => api
      .service('env-var')
      .create(payload);

    const createdVar: EnvVar = yield call(fn);
    const clonedState = _cloneDeep(appState);

    const updatedApps = clonedState.apps.map(a => {
      if (a._id !== payload.appId) return a;

      return {
        ...a,
        envVars: [...(a.envVars || []), createdVar],
      };
    });

    yield put(setAppData(updatedApps));
  } catch(e) {
    if (e instanceof Error) {
      alert(e.message);
    } else {
      alert('Something went wrong');
    }
  }
}

interface GetOneApp {
  type: ActionTypes.GET_ONE_APP,
  payload: string;
}

function * getOneAppHandler({ payload }: GetOneApp) {
  try {
    const appState: StoreState['app'] = yield select(appSelector);

    const fn = () => api
      .service('app')
      .get(payload, {
        query: {
          $resolve: {
            envVars: true,
          },
        },
      });

    const app: App = yield call(fn);

    const updatedApps = appState.apps.map(a => {
      return a._id === app._id
        ? app
        : a;
    });

    yield put(setAppData(updatedApps));
  } catch(e) {}
}