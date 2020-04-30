import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as TMDB_API from "../lib/TMDB_API";
import createAsyncAction from "../lib/createAsyncAction";

const CLEAR_MOVIES = "movies/CLEAR_MOVIES";
const GET_NOW_PLAYING = createAsyncAction(
  "movies/GET_NOW_PLAYING",
  TMDB_API.getNowPlaying
);
const GET_POPULAR = createAsyncAction(
  "movies/GET_POPULAR",
  TMDB_API.getPopular
);
const GET_TOP_RATED = createAsyncAction(
  "movies/GET_TOP_RATED",
  TMDB_API.getTopRated
);
const GET_UPCOMING = createAsyncAction(
  "movies/GET_UPCOMING",
  TMDB_API.getUpcoming
);

export const clearMovies = createAction(CLEAR_MOVIES, (category) => category);
export const getNowPlaying = createAction(
  GET_NOW_PLAYING.REQUEST,
  (page) => page
);
export const getPopular = createAction(GET_POPULAR.REQUEST, (page) => page);
export const getTopRated = createAction(GET_TOP_RATED.REQUEST, (page) => page);
export const getUpcoming = createAction(GET_UPCOMING.REQUEST, (page) => page);

export function* moviesSaga() {
  yield takeLatest(GET_NOW_PLAYING.REQUEST, GET_NOW_PLAYING.SAGA);
  yield takeLatest(GET_POPULAR.REQUEST, GET_POPULAR.SAGA);
  yield takeLatest(GET_TOP_RATED.REQUEST, GET_TOP_RATED.SAGA);
  yield takeLatest(GET_UPCOMING.REQUEST, GET_UPCOMING.SAGA);
}

const initialState = {
  nowPlaying: null,
  popular: null,
  topRated: null,
  upcoming: null,
  lastPage: null,
  meta: null,
  error: null,
};

const movies = handleActions(
  {
    [CLEAR_MOVIES]: (state, { payload: category }) => ({
      ...state,
      [category]: null,
      error: null,
    }),
    [GET_NOW_PLAYING.REQUEST]: (state) => ({
      ...state,
      error: null,
    }),
    [GET_NOW_PLAYING.SUCCESS]: (
      state,
      { payload: { results: nowPlaying, total_pages: lastPage }, meta }
    ) => ({
      ...state,
      nowPlaying,
      lastPage,
      meta,
    }),
    [GET_NOW_PLAYING.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_POPULAR.REQUEST]: (state) => ({
      ...state,
      error: null,
    }),
    [GET_POPULAR.SUCCESS]: (
      state,
      { payload: { results: popular, total_pages: lastPage }, meta }
    ) => ({
      ...state,
      popular,
      lastPage,
      meta,
    }),
    [GET_POPULAR.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_TOP_RATED.REQUEST]: (state) => ({
      ...state,
      error: null,
    }),
    [GET_TOP_RATED.SUCCESS]: (
      state,
      { payload: { results: topRated, total_pages: lastPage }, meta }
    ) => ({
      ...state,
      topRated,
      lastPage,
      meta,
    }),
    [GET_TOP_RATED.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
    [GET_UPCOMING.REQUEST]: (state) => ({
      ...state,
      error: null,
    }),
    [GET_UPCOMING.SUCCESS]: (
      state,
      { payload: { results: upcoming, total_pages: lastPage }, meta }
    ) => ({
      ...state,
      upcoming,
      lastPage,
      meta,
    }),
    [GET_UPCOMING.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default movies;
