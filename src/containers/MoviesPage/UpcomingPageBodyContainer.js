import React from "react";
import MoviesPageBodyContainer from "./MoviesPageBodyContainer";

function UpcomingPageBodyContainer({ currentPage }) {
  return <MoviesPageBodyContainer type="upcoming" currentPage={currentPage} />;
}

export default UpcomingPageBodyContainer;
