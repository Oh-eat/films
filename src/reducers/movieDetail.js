import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as TMDB_API from "../lib/TMDB_API";
import createAsyncAction from "../lib/createAsyncAction";

const INITIALIZE_STATE = "movieDetail/INITIALIZE_STATE";
const GET_DETAIL = createAsyncAction(
  "movieDetail/GET_DETAIL",
  TMDB_API.getDetail
);

export const initializeState = createAction(INITIALIZE_STATE);
export const getDetail = createAction(GET_DETAIL.REQUEST, (movieId) => movieId);

export function* movieDetailSaga() {
  yield takeLatest(GET_DETAIL.REQUEST, GET_DETAIL.SAGA);
}

const initialState = {
  movieDetail: null,
  meta: null,
  error: null,
};

const movieDetail = handleActions(
  {
    [INITIALIZE_STATE]: () => initialState,
    [GET_DETAIL.REQUEST]: (state) => ({
      ...state,
      error: null,
    }),
    [GET_DETAIL.SUCCESS]: (state, { payload: detail, meta }) => ({
      ...state,
      detail,
      meta,
    }),
    [GET_DETAIL.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default movieDetail;
