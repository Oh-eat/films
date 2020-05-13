import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchMovies, initializeState } from "../reducers/search";
import { setBackground } from "../reducers/background";
import pickRandomMovie from "../lib/pickRandomMovie";
import { isEmptyArray } from "../lib/isEmpty";
import MoviesPageBody from "../components/MoviesPage";
import Loading from "../components/common/Loading";
import Error from "../components/common/Error";
import initializeView from "../lib/initializeView";

function SearchPageBodyContainer({ query, currentPage }) {
  const dispatch = useDispatch();
  const { movies, lastPage, error } = useSelector(({ search }) => search);
  const backgroundPath = useSelector(({ background }) => background.path);
  const loading = useSelector(
    ({ loading }) => loading["search/SEARCH_MOVIES_REQUEST"]
  );

  useEffect(() => {
    initializeView();
    dispatch(searchMovies({ query, page: currentPage }));
    return () => {
      dispatch(initializeState());
    };
  }, [query, currentPage, dispatch]);

  useEffect(() => {
    if (!movies || isEmptyArray(movies)) {
      return;
    }
    const movie = pickRandomMovie(movies, backgroundPath);
    dispatch(setBackground({ path: movie.backdrop_path, brightness: "dark" }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movies, dispatch]);

  if (error) return <Error />;
  if (isEmptyArray(movies)) return <strong>검색된 영화가 없습니다.</strong>;
  if (loading) return <Loading />;
  if (!movies) return null;

  return (
    <MoviesPageBody
      movies={movies}
      currentPage={currentPage}
      lastPage={lastPage}
    />
  );
}

export default SearchPageBodyContainer;
