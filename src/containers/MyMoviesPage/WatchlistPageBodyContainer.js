import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBackground } from "../../reducers/background";
import pickRandomMovie from "../../lib/pickRandomMovie";
import { isEmptyArray } from "../../lib/isEmpty";
import MoviesPageBody from "../../components/MoviesPage";
import Error from "../../components/common/Error";
import initializeView from "../../lib/initializeView";
import { withRouter } from "react-router-dom";

function WatchlistPageBodyContainer({ currentPage, history }) {
  const dispatch = useDispatch();
  const [lastPage, setLastPage] = useState(null);
  const [watchlist, setWatchlist] = useState(null);
  const [error, setError] = useState(null);
  const backgroundPath = useSelector(({ background }) => background.path);

  useEffect(() => {
    initializeView();
    try {
      const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      const lastPage = Math.max(Math.ceil(watchlist.length / 20), 1);
      if (lastPage < currentPage) {
        history.push(`/my_movies/like?page=${lastPage}`);
      } else if (currentPage < 1) {
        setError(true);
      } else {
        setWatchlist(watchlist.slice((currentPage - 1) * 20, currentPage * 20));
        setLastPage(lastPage);
      }
    } catch {
      setError(true);
    }
  }, [currentPage, history]);

  useEffect(() => {
    if (!watchlist || isEmptyArray(watchlist)) {
      return;
    }
    const movie = pickRandomMovie(watchlist, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchlist, dispatch]);

  if (error) return <Error />;
  if (!watchlist) return null;
  if (isEmptyArray(watchlist))
    return <strong>와치리스트가 비어 있습니다.</strong>;

  return (
    <MoviesPageBody
      movies={watchlist}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default withRouter(WatchlistPageBodyContainer);
