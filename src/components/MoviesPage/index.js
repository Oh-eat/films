import React from "react";
import { Helmet } from "react-helmet";
import MovieGrid from "./MovieGrid";
import Pagination from "./Pagination";

export const typeToKR = {
  nowPlaying: "상영 중",
  popular: "인기",
  topRated: "평점 우수",
  upcoming: "개봉 예정",
  like: "좋아요",
  watchlist: "와치리스트",
  search: "검색 결과",
};

function MoviesPageBody({ movies, currentPage, lastPage, type }) {
  return (
    <>
      <Helmet>
        <title>FILMS - {typeToKR[type]}</title>
      </Helmet>
      <MovieGrid movies={movies} />
      <Pagination currentPage={currentPage} lastPage={lastPage} />
    </>
  );
}

export default MoviesPageBody;
