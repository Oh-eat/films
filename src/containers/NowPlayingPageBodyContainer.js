import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import MoviesPageBody from "../components/MoviesPage.js";
import { clearMovies, getNowPlaying } from "../reducers/movies.js";
import Loading from "../components/common/Loading.js";
import Error from "../components/common/Error.js";
import pickRandomMovie from "../lib/pickRandomMovie.js";
import { setBackground } from "../reducers/background.js";

function NowPlayingPageBodyContainer({ page }) {
  const dispatch = useDispatch();
  const { nowPlaying, lastPage, error } = useSelector(({ movies }) => movies);
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(
    ({ loading }) => loading["movies/GET_NOW_PLAYING_REQUEST"]
  );

  useEffect(() => {
    if (loading || nowPlaying) return;
    if (!nowPlaying) {
      dispatch(getNowPlaying(page));
    }
  }, [nowPlaying, loading, page, dispatch]);

  useEffect(() => {
    if (nowPlaying) {
      const movie = pickRandomMovie(nowPlaying, backgroundPath);
      dispatch(
        setBackground({ path: movie.backdrop_path, brightness: "dark" })
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nowPlaying, dispatch]);

  useEffect(() => {
    return () => dispatch(clearMovies("nowPlaying"));
  }, [dispatch]);

  if (loading) return <Loading />;
  if (error) return <Error />;
  if (!nowPlaying) return null;

  return <MoviesPageBody movies={nowPlaying} page={page} lastPage={lastPage} />;
}

export default NowPlayingPageBodyContainer;
