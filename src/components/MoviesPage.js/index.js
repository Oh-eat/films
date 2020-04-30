import React from "react";
import { MoviesPageBodyStyled } from "./styles";
import MovieGrid from "./MovieGrid";
import MoviesNav from "./MoviesNav";
import Pagination from "./Pagination";

function MoviesPageBody({ movies, page, lastPage }) {
  return (
    <MoviesPageBodyStyled>
      <MoviesNav />
      <MovieGrid movies={movies} />
      <Pagination page={page} lastPage={lastPage} />
    </MoviesPageBodyStyled>
  );
}

export default MoviesPageBody;
