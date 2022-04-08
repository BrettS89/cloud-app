import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import api from '../../../api';
import { ActionTypes, setAppData } from '../../actions';
import { appSelector } from '../../index';
import { App } from '../../../types/';

export default [
  getAppsWatcher,
  createAppWatcher,
];

function * getAppsWatcher() {
  yield takeLatest(ActionTypes.GET_APPS, getAppsHandler);
}

function * createAppWatcher() {
  yield takeLatest(ActionTypes.CREATE_APP, createAppHandler);
}

function * getAppsHandler() {
  try {
    const fn = () => api
      .service('app')
      .find({
        $sort: { createdAt: -1 },
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
    const appState: Record<string, any> = yield select(appSelector);

    const fn = () => api
      .service('app')
      .create(payload.data);

    const createdApp: App = yield call(fn);
    const updatedAppState = [...appState.apps, createdApp];
    //@ts-ignore
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
