import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMovies, getUpcoming } from "../reducers/movies";
import { setBackground } from "../reducers/background";
import pickRandomMovie from "../lib/pickRandomMovie";
import isEmptyArray from "../lib/isEmptyArray";
import MoviesPageBody from "../components/MoviesPage";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import initializeView from "../lib/initializeView";

function UpcomingPageBodyContainer({ currentPage }) {
  const dispatch = useDispatch();
  const { upcoming, lastPage, error } = useSelector(({ movies }) => movies);
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(
    ({ loading }) => loading["movies/GET_UPCOMING_REQUEST"]
  );

  useEffect(() => {
    initializeView();
    dispatch(getUpcoming(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (!upcoming || isEmptyArray(upcoming)) {
      return;
    }
    const movie = pickRandomMovie(upcoming, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [upcoming, dispatch]);

  useEffect(() => {
    return () => dispatch(clearMovies("upcoming"));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error || isEmptyArray(upcoming)) return <Error />;
  if (!upcoming) return null;

  return (
    <MoviesPageBody
      movies={upcoming}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default UpcomingPageBodyContainer;
