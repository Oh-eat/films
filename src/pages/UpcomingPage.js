import React from "react";
import qs from "qs";
import UpcomingPageBodyContainer from "../containers/UpcomingPageBodyContainer";

function UpcomingPage({ location }) {
  const { page: currentPage } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return <UpcomingPageBodyContainer currentPage={parseInt(currentPage || 1)} />;
}

export default UpcomingPage;
