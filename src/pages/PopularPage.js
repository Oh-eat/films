import React from "react";
import qs from "qs";
import PopularPageBodyContainer from "../containers/PopularPageBodyContainer";

function PopularPage({ location }) {
  const { page: currentPage } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return <PopularPageBodyContainer currentPage={parseInt(currentPage || 1)} />;
}

export default PopularPage;
