import React from "react";
import qs from "qs";
import SearchPageBodyContainer from "../containers/SearchPageBodyContainer";

function SearchPage({ location }) {
  const { query, page: currentPage } = qs.parse(location.search, {
    ignoreQueryPrefix: true,
  });
  return (
    <SearchPageBodyContainer
      query={query}
      currentPage={parseInt(currentPage || 1)}
    />
  );
}

export default SearchPage;
