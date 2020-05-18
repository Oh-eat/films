import React from "react";
import MoviesPageBodyContainer from "./MoviesPageBodyContainer";

function PopularPageBodyContainer({ currentPage }) {
  return <MoviesPageBodyContainer type="popular" currentPage={currentPage} />;
}

export default PopularPageBodyContainer;
