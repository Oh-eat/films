import React from "react";
import MyMoviesPageBodyContainer from "./MyMoviesPageBodyContainer";

function WatchlistPageBodyContainer({ currentPage }) {
  return (
    <MyMoviesPageBodyContainer type="watchlist" currentPage={currentPage} />
  );
}

export default WatchlistPageBodyContainer;
