import { put, call } from "redux-saga/effects";
import { startLoading, finishLoading } from "../reducers/loading";

export default function createRequestSaga(asyncAction, api) {
  const { REQUEST, SUCCESS, FAILURE } = asyncAction;
  return function* (action) {
    yield put(startLoading(REQUEST));
    try {
      const response = yield call(api, action.payload);
      yield put({ type: SUCCESS, payload: response.data, meta: response });
    } catch (e) {
      yield put({ type: FAILURE, payload: e, error: true });
    } finally {
      yield put(finishLoading(REQUEST));
    }
  };
}
