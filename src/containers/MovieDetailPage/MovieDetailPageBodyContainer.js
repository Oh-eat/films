import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import initializeView from "../../lib/initializeView";
import { initializeState, getFurtherDetail } from "../../reducers/movieDetail";
import { setBackground } from "../../reducers/background";
import Error from "../../components/common/Error";
import Loading from "../../components/common/Loading";
import MovieDetailPageBody from "../../components/MovieDetailPage";

function MovieDetailPageBodyContainer({ movieId }) {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();
  const movieDetail = useSelector(({ movieDetail }) => movieDetail);
  const { detailKR, error, ...furtherDetail } = movieDetail;
  const { loaded: backgroundLoaded } = useSelector(
    ({ background }) => background
  );

  useEffect(() => {
    initializeView();
    setLoaded(false);
    dispatch(getFurtherDetail(movieId));
    return () => {
      dispatch(initializeState());
    };
  }, [movieId, dispatch]);

  useEffect(() => {
    if (!detailKR) return;
    setLoaded(true);
    dispatch(
      setBackground({ path: detailKR.backdrop_path, brightness: "dark" })
    );
  }, [detailKR, dispatch]);

  if (error) return <Error />;
  if (!loaded || (detailKR && detailKR.backdrop_path && !backgroundLoaded))
    return <Loading />;
  if (!detailKR || Object.values(furtherDetail).includes(null)) return null;

  return <MovieDetailPageBody detailKR={detailKR} {...furtherDetail} />;
}

export default MovieDetailPageBodyContainer;
