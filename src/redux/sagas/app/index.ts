import {
  call, put, takeLatest, select
} from 'redux-saga/effects';
import api from '../../../api';
import { ActionTypes, setAppData } from '../../actions';

export default [
  getAppsWatcher,
];

function * getAppsWatcher() {
  yield takeLatest(ActionTypes.GET_APPS, getAppsHandler);
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
