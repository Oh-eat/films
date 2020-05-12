import React from "react";
import qs from "qs";
import TopRatedPageBodyContainer from "../containers/MoviesPage/TopRatedPageBodyContainer";

function TopRatedPage({ location }) {
  const { page: currentPage } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return <TopRatedPageBodyContainer currentPage={parseInt(currentPage || 1)} />;
}

export default TopRatedPage;
