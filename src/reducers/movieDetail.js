import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as TMDB_API from "../lib/TMDB_API";
import createAsyncAction from "../lib/createAsyncAction";

const INITIALIZE_STATE = "movieDetail/INITIALIZE_STATE";
const GET_DETAIL = createAsyncAction(
  "movieDetail/GET_DETAIL",
  TMDB_API.getDetail
);
const GET_FURTHER_DETAIL = createAsyncAction(
  "movieDetail/GET_FURTHER_DETAIL",
  TMDB_API.getFurtherDetail
);

export const initializeState = createAction(INITIALIZE_STATE);
export const getDetail = createAction(GET_DETAIL.REQUEST, (movieId) => movieId);
export const getFurtherDetail = createAction(
  GET_FURTHER_DETAIL.REQUEST,
  (movieId) => movieId
);

export function* movieDetailSaga() {
  yield takeLatest(GET_DETAIL.REQUEST, GET_DETAIL.SAGA);
  yield takeLatest(GET_FURTHER_DETAIL.REQUEST, GET_FURTHER_DETAIL.SAGA);
}

const initialState = {
  detailKR: null,
  detailEN: null,
  images: null,
  videos: null,
  credit: null,
  similars: null,
  meta: null,
  error: null,
};

const movieDetail = handleActions(
  {
    [INITIALIZE_STATE]: () => initialState,
    [GET_DETAIL.REQUEST]: () => initialState,
    [GET_DETAIL.SUCCESS]: (
      state,
      { payload: [{ data: detailKR }, { data: detailEN }], meta }
    ) => ({
      ...state,
      detailKR,
      detailEN,
      meta,
    }),
    [GET_DETAIL.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_FURTHER_DETAIL.REQUEST]: () => initialState,
    [GET_FURTHER_DETAIL.SUCCESS]: (
      state,
      {
        payload: [
          {
            data: [{ data: detailKR }, { data: detailEN }],
          },
          { data: images },
          { data: videos },
          { data: credit },
          { data: similars },
        ],
        meta,
      }
    ) => ({
      ...state,
      detailKR,
      detailEN,
      images,
      videos: videos.results,
      credit,
      similars: similars.results,
      meta,
    }),
    [GET_FURTHER_DETAIL.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default movieDetail;
