import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMovies, getTopRated } from "../reducers/movies.js";
import { setBackground } from "../reducers/background.js";
import pickRandomMovie from "../lib/pickRandomMovie.js";
import isEmptyArray from "../lib/isEmptyArray.js";
import MoviesPageBody from "../components/MoviesPage";
import Loading from "../components/common/Loading.js";
import Error from "../components/common/Error.js";

function TopRatedPageBodyContainer({ currentPage }) {
  const dispatch = useDispatch();
  const { topRated, lastPage, error } = useSelector(({ movies }) => movies);
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(
    ({ loading }) => loading["movies/GET_TOP_RATED_REQUEST"]
  );

  useEffect(() => {
    dispatch(getTopRated(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (!topRated || isEmptyArray(topRated)) {
      return;
    }
    const movie = pickRandomMovie(topRated, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [topRated, dispatch]);

  useEffect(() => {
    return () => dispatch(clearMovies("topRated"));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error || isEmptyArray(topRated)) return <Error />;
  if (!topRated) return null;

  return (
    <MoviesPageBody
      movies={topRated}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default TopRatedPageBodyContainer;
