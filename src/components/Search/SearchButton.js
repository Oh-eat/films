import React, { useCallback } from "react";
import { MdSearch } from "react-icons/md";
import Button from "../common/Button";
import { useDispatch } from "react-redux";
import { showSearchBar } from "../../reducers/search";

function SearchButton() {
  const dispatch = useDispatch();

  const onClick = useCallback(() => {
    dispatch(showSearchBar());
  }, [dispatch]);

  return (
    <Button variant="transparent circle" size="1.75rem" onClick={onClick}>
      <MdSearch size="2rem" />
    </Button>
  );
}

export default SearchButton;
