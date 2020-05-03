import React, { useEffect } from "react";
import MovieDetailPageBody from "../components/MovieDetailPage";
import { useDispatch, useSelector } from "react-redux";
import Error from "../components/common/Error";
import Loading from "../components/common/Loading";
import { initializeState, getFurtherDetail } from "../reducers/movieDetail";
import { setBackground } from "../reducers/background";
import initializeView from "../lib/initializeView";

function MovieDetailPageBodyContainer({ movieId }) {
  const dispatch = useDispatch();
  const movieDetail = useSelector(({ movieDetail }) => movieDetail);
  const { detail, error, ...furtherDetail } = movieDetail;
  const loading = useSelector(
    ({ loading }) => loading["movieDetail/GET_FURTHER_DETAIL_REQUST"]
  );
  const { loaded: backgroundLoaded } = useSelector(
    ({ background }) => background
  );

  useEffect(() => {
    initializeView();
    dispatch(getFurtherDetail(movieId));
    return () => {
      dispatch(initializeState());
    };
  }, [movieId, dispatch]);

  useEffect(() => {
    if (!detail) return;
    dispatch(setBackground({ path: detail.backdrop_path, brightness: "dark" }));
  }, [detail, dispatch]);

  console.log(furtherDetail);
  if (error) return <Error />;
  console.log("after error");
  if (loading || !backgroundLoaded) return <Loading />;
  console.log("after loading");
  if (!detail || Object.values(furtherDetail).includes(null)) return null;

  return <MovieDetailPageBody detail={detail} {...furtherDetail} />;
}

export default MovieDetailPageBodyContainer;
