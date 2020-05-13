import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import movieDetail, { movieDetailSaga } from "./movieDetail";
import movies, { moviesSaga } from "./movies";
import background from "./background";
import zoom from "./zoom";
import search, { searchSaga } from "./search";

export const rootReducer = combineReducers({
  loading,
  movieDetail,
  movies,
  search,
  background,
  zoom,
});

export function* rootSaga() {
  yield all([movieDetailSaga(), moviesSaga(), searchSaga()]);
}
