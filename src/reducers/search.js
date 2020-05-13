import { createAction, handleActions } from "redux-actions";
import { takeLatest } from "redux-saga/effects";
import * as TMDB_API from "../lib/TMDB_API";
import createAsyncAction from "../lib/createAsyncAction";

const INITIALIZE_STATE = "search/INITIALIZE_STATE";
const SHOW_SEARCH_BAR = "search/SHOW_SEARCH_BAR";
const HIDE_SEARCH_BAR = "search/HIDE_SEARCH_BAR";
const SEARCH_MOVIES = createAsyncAction(
  "search/SEARCH_MOVIES",
  TMDB_API.searchMovies
);

export const initializeState = createAction(INITIALIZE_STATE);
export const showSearchBar = createAction(SHOW_SEARCH_BAR);
export const hideSearchBar = createAction(HIDE_SEARCH_BAR);
export const searchMovies = createAction(
  SEARCH_MOVIES.REQUEST,
  ({ query, page }) => ({
    query,
    page,
  })
);

export function* searchSaga() {
  yield takeLatest(SEARCH_MOVIES.REQUEST, SEARCH_MOVIES.SAGA);
}

const initialState = {
  showSearchBar: false,
  movies: null,
  lastPage: null,
  error: null,
  meta: null,
};

const search = handleActions(
  {
    [INITIALIZE_STATE]: () => initialState,
    [SHOW_SEARCH_BAR]: (state) => ({
      ...state,
      showSearchBar: true,
    }),
    [HIDE_SEARCH_BAR]: (state) => ({
      ...state,
      showSearchBar: false,
    }),
    [SEARCH_MOVIES.REQUEST]: (state) => ({
      ...state,
      showSearchBar: false,
      error: null,
    }),
    [SEARCH_MOVIES.SUCCESS]: (
      state,
      { payload: { results: movies, total_pages: lastPage }, meta }
    ) => ({ ...state, movies, lastPage, meta }),
    [SEARCH_MOVIES.FAILURE]: (state, { payload: error }) => ({
      ...state,
      error,
    }),
  },
  initialState
);

export default search;
