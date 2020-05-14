import React from "react";
import qs from "qs";
import { SearchTextStyled } from "./styles";

function SearchText({ location }) {
  const { query } = qs.parse(location.search, { ignoreQueryPrefix: true });
  return (
    <SearchTextStyled>
      검색:<em>{query}</em>
    </SearchTextStyled>
  );
}

export default SearchText;
