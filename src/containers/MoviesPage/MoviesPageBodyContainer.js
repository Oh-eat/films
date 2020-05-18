import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackground, setBrightness } from "../../reducers/background";
import {
  clearMovies,
  getNowPlaying,
  getPopular,
  getTopRated,
  getUpcoming,
} from "../../reducers/movies";
import pickRandomMovie from "../../lib/pickRandomMovie";
import { isEmptyArray } from "../../lib/isEmpty";
import MoviesPageBody from "../../components/MoviesPage";
import NoContent from "../../components/common/NoContent";
import Loading from "../../components/common/Loading";
import Error from "../../components/common/Error";

const fetchActions = {
  nowPlaying: getNowPlaying,
  popular: getPopular,
  topRated: getTopRated,
  upcoming: getUpcoming,
};

const loadingKeys = {
  nowPlaying: "movies/GET_NOW_PLAYING_REQUEST",
  popular: "movies/GET_POPULAR_REQUEST",
  topRated: "movies/GET_TOP_RATED_REQUEST",
  upcoming: "movies/GET_UPCOMING_REQUEST",
};

function MoviesPageBodyContainer({ type, currentPage }) {
  const dispatch = useDispatch();
  const { movies, lastPage, error } = useSelector(({ movies }) => ({
    movies: movies[type],
    lastPage: movies.lastPage,
    error: movies.error,
  }));
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(({ loading }) => loading[loadingKeys[type]]);

  useEffect(() => {
    const fetchAction = fetchActions[type];
    dispatch(fetchAction(currentPage));
    return () => {
      dispatch(clearMovies(type));
    };
  }, [type, currentPage, dispatch]);

  useEffect(() => {
    if (!movies) {
      dispatch(setBrightness("dark"));
      return;
    }
    const movie = pickRandomMovie(movies, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, dispatch]);

  if (error) return <Error />;
  if (loading) return <Loading />;
  if (isEmptyArray(movies))
    return <NoContent>검색된 영화가 없습니다.</NoContent>;
  if (!movies) return null;

  return (
    <MoviesPageBody
      movies={movies}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default MoviesPageBodyContainer;
