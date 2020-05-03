import React from "react";
import qs from "qs";
import NowPlayingPageBodyContainer from "../containers/NowPlayingPageBodyContainer";

function NowPlayingPage({ location }) {
  const { page: currentPage } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <NowPlayingPageBodyContainer currentPage={parseInt(currentPage || 1)} />
  );
}

export default NowPlayingPage;
