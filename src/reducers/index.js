import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import movieDetail, { movieDetailSaga } from "./movieDetail";
import movies, { moviesSaga } from "./movies";
import background from "./background";
import zoom from "./zoom";

export const rootReducer = combineReducers({
  loading,
  movieDetail,
  movies,
  background,
  zoom,
});

export function* rootSaga() {
  yield all([movieDetailSaga(), moviesSaga()]);
}
