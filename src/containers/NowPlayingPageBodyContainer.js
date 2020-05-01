import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMovies, getNowPlaying } from "../reducers/movies.js";
import { setBackground } from "../reducers/background.js";
import pickRandomMovie from "../lib/pickRandomMovie.js";
import isEmptyArray from "../lib/isEmptyArray.js";
import MoviesPageBody from "../components/MoviesPage";
import Loading from "../components/common/Loading.js";
import Error from "../components/common/Error.js";

function NowPlayingPageBodyContainer({ currentPage }) {
  const dispatch = useDispatch();
  const { nowPlaying, lastPage, error } = useSelector(({ movies }) => movies);
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(
    ({ loading }) => loading["movies/GET_NOW_PLAYING_REQUEST"]
  );

  useEffect(() => {
    dispatch(getNowPlaying(currentPage));
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (!nowPlaying || isEmptyArray(nowPlaying)) {
      return;
    }
    const movie = pickRandomMovie(nowPlaying, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying, dispatch]);

  useEffect(() => {
    return () => {
      dispatch(clearMovies("nowPlaying"));
    };
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error || isEmptyArray(nowPlaying)) return <Error />;
  if (!nowPlaying) return null;

  return (
    <MoviesPageBody
      movies={nowPlaying}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default NowPlayingPageBodyContainer;
