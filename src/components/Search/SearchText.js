import React from "react";
import qs from "qs";
import { SearchTextStyled } from "./styles";

function SearchText({ location }) {
  const { query } = qs.parse(location.search, { ignoreQueryPrefix: true });

  return (
    <SearchTextStyled>
      <span className="font-light">검색:</span>
      <em className="font-bold">{query}</em>
    </SearchTextStyled>
  );
}

export default SearchText;
