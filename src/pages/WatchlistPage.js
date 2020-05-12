import React from "react";
import qs from "qs";
import WatchlistPageBodyContainer from "../containers/MyMoviesPage/WatchlistPageBodyContainer";

function WatchlistPage({ location }) {
  const { page: currentPage } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <WatchlistPageBodyContainer currentPage={parseInt(currentPage || 1)} />
  );
}

export default WatchlistPage;
