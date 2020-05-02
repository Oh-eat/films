import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMovies, getPopular } from "../reducers/movies";
import { setBackground } from "../reducers/background";
import pickRandomMovie from "../lib/pickRandomMovie";
import isEmptyArray from "../lib/isEmptyArray";
import MoviesPageBody from "../components/MoviesPage";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import initializeView from "../lib/initializeView";

function PopularPageBodyContainer({ currentPage }) {
  const dispatch = useDispatch();
  const { popular, lastPage, error } = useSelector(({ movies }) => movies);
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(
    ({ loading }) => loading["movies/GET_POPULAR_REQUEST"]
  );

  useEffect(() => {
    initializeView();
    dispatch(getPopular(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (!popular || isEmptyArray(popular)) {
      return;
    }
    const movie = pickRandomMovie(popular, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [popular, dispatch]);

  useEffect(() => {
    return () => dispatch(clearMovies("popular"));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error || isEmptyArray(popular)) return <Error />;
  if (!popular) return null;

  return (
    <MoviesPageBody
      movies={popular}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default PopularPageBodyContainer;
