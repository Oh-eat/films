import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearMovies, getNowPlaying } from "../reducers/movies";
import { setBackground } from "../reducers/background";
import pickRandomMovie from "../lib/pickRandomMovie";
import isEmptyArray from "../lib/isEmptyArray";
import MoviesPageBody from "../components/MoviesPage";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import initializeView from "../lib/initializeView";

function NowPlayingPageBodyContainer({ currentPage }) {
  const dispatch = useDispatch();
  const { nowPlaying, lastPage, error } = useSelector(({ movies }) => movies);
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(
    ({ loading }) => loading["movies/GET_NOW_PLAYING_REQUEST"]
  );

  useEffect(() => {
    initializeView();
    dispatch(getNowPlaying(currentPage));
    return () => {
      dispatch(clearMovies("nowPlaying"));
    };
  }, [currentPage, dispatch]);

  useEffect(() => {
    if (!nowPlaying || isEmptyArray(nowPlaying)) {
      return;
    }
    const movie = pickRandomMovie(nowPlaying, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying, dispatch]);

  if (error || isEmptyArray(nowPlaying)) return <Error />;
  if (loading) return <Loading />;
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
