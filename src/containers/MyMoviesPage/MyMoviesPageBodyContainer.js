import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { setBackground, setBrightness } from "../../reducers/background";
import pickRandomMovie from "../../lib/pickRandomMovie";
import { isEmptyArray } from "../../lib/isEmpty";
import MoviesPageBody from "../../components/MoviesPage";
import NoContent from "../../components/common/NoContent";
import Error from "../../components/common/Error";

function MyMoviesPageBodyContainer({ type, currentPage, history }) {
  const dispatch = useDispatch();
  const [lastPage, setLastPage] = useState(null);
  const [movies, setMovies] = useState(null);
  const [error, setError] = useState(null);
  const backgroundPath = useSelector(({ background }) => background.path);

  useEffect(() => {
    try {
      const movies = JSON.parse(localStorage.getItem(type)) || [];
      const lastPage = Math.max(Math.ceil(movies.length / 20), 1);
      if (lastPage < currentPage) {
        history.push(`/my_movies/${type}?page=${lastPage}`);
      } else if (currentPage < 1) {
        setError(true);
      } else {
        setMovies(movies.slice((currentPage - 1) * 20, currentPage * 20));
        setLastPage(lastPage);
      }
    } catch {
      setError(true);
    }
  }, [currentPage, type, history]);

  useEffect(() => {
    if (!movies) {
      dispatch(setBrightness("dark"));
      return;
    }
    const movie = pickRandomMovie(movies, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, dispatch]);

  if (error) return <Error />;
  if (!movies) return null;
  if (isEmptyArray(movies))
    return (
      <NoContent>
        {type === "like"
          ? "좋아하는 영화가 없습니다."
          : "와치리스트에 등록된 영화가 없습니다."}
      </NoContent>
    );

  return (
    <MoviesPageBody
      movies={movies}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default withRouter(MyMoviesPageBodyContainer);
