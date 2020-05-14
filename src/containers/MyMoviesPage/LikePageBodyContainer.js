import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackground, setBrightness } from "../../reducers/background";
import pickRandomMovie from "../../lib/pickRandomMovie";
import { isEmptyArray } from "../../lib/isEmpty";
import MoviesPageBody from "../../components/MoviesPage";
import Error from "../../components/common/Error";
import initializeView from "../../lib/initializeView";
import { withRouter } from "react-router-dom";

function LikePageBodyContainer({ currentPage, history }) {
  const dispatch = useDispatch();
  const [lastPage, setLastPage] = useState(null);
  const [like, setLike] = useState(null);
  const [error, setError] = useState(null);
  const backgroundPath = useSelector(({ background }) => background.path);

  useEffect(() => {
    initializeView();
    try {
      const like = JSON.parse(localStorage.getItem("like")) || [];
      const lastPage = Math.max(Math.ceil(like.length / 20), 1);
      if (lastPage < currentPage) {
        history.push(`/my_movies/like?page=${lastPage}`);
      } else if (currentPage < 1) {
        setError(true);
      } else {
        setLike(like.slice((currentPage - 1) * 20, currentPage * 20));
        setLastPage(lastPage);
      }
    } catch {
      setError(true);
    }
  }, [currentPage, history]);

  useEffect(() => {
    if (!like || isEmptyArray(like)) {
      dispatch(setBrightness("dark"));
      return;
    }
    const movie = pickRandomMovie(like, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [like, dispatch]);

  if (error) return <Error />;
  if (!like) return null;
  if (isEmptyArray(like)) return <strong>좋아하는 영화가 없습니다.</strong>;

  return (
    <MoviesPageBody
      movies={like}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default withRouter(LikePageBodyContainer);
