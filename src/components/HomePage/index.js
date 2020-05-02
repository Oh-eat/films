import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import pickRandomMovie from "../../lib/pickRandomMovie";
import { getDetail, initializeState } from "../../reducers/movieDetail";
import { getNowPlaying } from "../../reducers/movies";
import { setBackground } from "../../reducers/background";
import { Wrapper } from "./styles";
import Button from "../common/Button";
import Error from "../common/Error";
import Loading from "../common/Loading";
import initializeView from "../../lib/initializeView";

function HomePageBody() {
  const dispatch = useDispatch();
  const { nowPlaying, nowPlayingError, nowPlayingLoading } = useSelector(
    ({ movies, loading }) => ({
      nowPlaying: movies.nowPlaying,
      nowPlayingError: movies.error,
      nowPlayingLoading: loading["movies/GET_NOW_PLAYING_REQUEST"],
    })
  );
  const { detail, detailError, detailLoading } = useSelector(
    ({ movieDetail, loading }) => ({
      detail: movieDetail.detail,
      detailError: movieDetail.error,
      detailLoading: loading["movieDetail/GET_DETAIL_REQUEST"],
    })
  );
  const backgroundPath = useSelector(({ background }) => background.path);

  useEffect(() => {
    initializeView();
    return () => {
      dispatch(initializeState());
    };
  }, [dispatch]);

  useEffect(() => {
    if (!nowPlaying && !nowPlayingLoading) {
      dispatch(getNowPlaying());
      return;
    }
    if (!detail && !detailLoading) {
      const movie = pickRandomMovie(nowPlaying, backgroundPath);
      dispatch(getDetail(movie.id));
      return;
    }
    if (detail && detail.backdrop_path !== backgroundPath) {
      dispatch(
        setBackground({ path: detail.backdrop_path, brightness: "bright" })
      );
    }
  }, [
    nowPlaying,
    nowPlayingLoading,
    detail,
    detailLoading,
    backgroundPath,
    dispatch,
  ]);

  if (detailError || nowPlayingError) return <Error />;
  if (detailLoading || nowPlayingLoading) return <Loading />;
  if (!detail || !nowPlaying) return null;

  return (
    <Wrapper>
      <h2>{detail.title}</h2>
      <p>
        <em>{detail.tagline}</em>
      </p>
      <Button fontSize="4vmin" variant="outlined" to={`/movie/${detail.id}`}>
        더 보기
      </Button>
    </Wrapper>
  );
}

export default HomePageBody;
