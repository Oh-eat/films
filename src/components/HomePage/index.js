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
    if (!detailKR && !detailLoading) {
      const movie = pickRandomMovie(nowPlaying, backgroundPath);
      dispatch(getDetail(movie.id));
      return;
    }
    if (detailKR && detailKR.backdrop_path !== backgroundPath) {
      dispatch(
        setBackground({ path: detailKR.backdrop_path, brightness: "bright" })
      );
    }
  }, [
    nowPlaying,
    nowPlayingLoading,
    detailKR,
    detailLoading,
    backgroundPath,
    dispatch,
  ]);

  if (detailError || nowPlayingError) return <Error />;
  if (detailLoading || nowPlayingLoading || !backgroundLoaded)
    return <Loading />;
  if (!detailKR || !nowPlaying) return null;

  return (
    <Wrapper>
      <h2>{detailKR.title || detailEN.title}</h2>
      <p>
        <em>{detailKR.tagline || detailEN.tagline}</em>
      </p>
      <Button fontSize="4vmin" variant="outlined" to={`/movie/${detailKR.id}`}>
        더 보기
      </Button>
    </Wrapper>
  );
}

export default HomePageBody;
