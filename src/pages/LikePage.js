import React from "react";
import qs from "qs";
import LikePageBodyContainer from "../containers/MyMoviesPage/LikePageBodyContainer";

function LikePage({ location }) {
  const { page: currentPage } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return <LikePageBodyContainer currentPage={parseInt(currentPage || 1)} />;
}

export default LikePage;
