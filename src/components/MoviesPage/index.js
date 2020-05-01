import React from "react";
import MovieGrid from "./MovieGrid";
import Pagination from "./Pagination";

function MoviesPageBody({ movies, currentPage, lastPage }) {
  return (
    <>
      <MovieGrid movies={movies} />
      <Pagination currentPage={currentPage} lastPage={lastPage} />
    </>
  );
}

export default MoviesPageBody;
