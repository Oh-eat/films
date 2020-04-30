import { combineReducers } from "redux";
import { all } from "redux-saga/effects";
import loading from "./loading";
import movieDetail, { movieDetailSaga } from "./movieDetail";
import movies, { moviesSaga } from "./movies";
import background from "./background";

export const rootReducer = combineReducers({
  loading,
  movieDetail,
  movies,
  background,
});

export function* rootSaga() {
  yield all([movieDetailSaga(), moviesSaga()]);
}
