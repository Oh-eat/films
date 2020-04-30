import React from "react";
import qs from "qs";
import NowPlayingPageBodyContainer from "../containers/NowPlayingPageBodyContainer";

function NowPlayingPage({ location }) {
  const { page } = qs.parse(location.search, { ignoreQueryPrefix: true });
  return <NowPlayingPageBodyContainer page={parseInt(page || 1)} />;
}

export default NowPlayingPage;
