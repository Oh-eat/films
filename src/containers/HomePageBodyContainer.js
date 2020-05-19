import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import mergeDetail from "../lib/mergeDetail";
import pickRandomMovie from "../lib/pickRandomMovie";
import { getNowPlaying, clearMovies } from "../reducers/movies";
import { getDetail, initializeState } from "../reducers/movieDetail";
import { setBackground } from "../reducers/background";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";
import HomePageBody from "../components/HomePage";

function HomePageBodyContainer() {
  const dispatch = useDispatch();
  const { nowPlaying, error: nowPlayingError } = useSelector(
    ({ movies }) => movies
  );
  const { detailKR, detailEN, error: detailError } = useSelector(
    ({ movieDetail }) => movieDetail
  );
  const { nowPlayingLoading, detailLoading } = useSelector(({ loading }) => ({
    nowPlayingLoading: loading["movies/GET_NOW_PLAYING_REQUEST"],
    detailLoading: loading["movieDetail/GET_DETAIL_REQUEST"],
  }));
  const { path: backgroundPath, loaded: backgroundLoaded } = useSelector(
    ({ background }) => background
  );

  useEffect(() => {
    return () => {
      dispatch(initializeState());
    };
  }, [dispatch]);

  useEffect(() => {
    dispatch(getNowPlaying());
  }, [dispatch]);

  useEffect(() => {
    if (nowPlaying && !detailKR && !detailLoading) {
      const movie = pickRandomMovie(nowPlaying, backgroundPath);
      dispatch(getDetail(movie.id));
    }
  }, [nowPlaying, detailKR, detailLoading, backgroundPath, dispatch]);

  useEffect(() => {
    if (detailKR && detailKR.backdrop_path !== backgroundPath) {
      dispatch(clearMovies("nowPlaying"));
      dispatch(
        setBackground({ path: detailKR.backdrop_path, brightness: "bright" })
      );
    }
  }, [detailKR, backgroundPath, dispatch]);

  if (detailError || nowPlayingError) return <Error />;
  if (detailLoading || nowPlayingLoading || !backgroundLoaded)
    return <Loading />;
  if (!detailKR) return null;

  return <HomePageBody detail={mergeDetail(detailKR, detailEN)} />;
}

export default HomePageBodyContainer;
