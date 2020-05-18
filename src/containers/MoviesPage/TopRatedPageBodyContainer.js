import React from "react";
import MoviesPageBodyContainer from "./MoviesPageBodyContainer";

function TopRatedPageBodyContainer({ currentPage }) {
  return <MoviesPageBodyContainer type="topRated" currentPage={currentPage} />;
}

export default TopRatedPageBodyContainer;
