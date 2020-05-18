import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdClose, MdSearch } from "react-icons/md";
import { hideSearchBar } from "../../reducers/search";
import Button from "../common/Button";
import { SearchBarStyled } from "./styles";

function SearchBar({ history, location }) {
  const dispatch = useDispatch();
  const visible = useSelector(({ search }) => search.showSearchBar);
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  const onCancelClick = useCallback(() => {
    dispatch(hideSearchBar());
  }, [dispatch]);
  const onChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (keyword === "" || !keyword) {
        if (inputRef.current) inputRef.current.focus();
        return;
      }
      history.push(`/search?query=${keyword}`);
    },
    [keyword, history]
  );

  useEffect(() => {
    if (inputRef.current) {
      if (visible) {
        inputRef.current.focus();
      } else {
        setKeyword("");
      }
    }
  }, [visible]);

  useEffect(() => {
    dispatch(hideSearchBar());
  }, [location, dispatch]);

  return (
    <SearchBarStyled className={visible ? "visible" : ""}>
      <span>검색</span>
      <Button
        className="close"
        variant="transparent circle"
        size="1.75rem"
        onClick={onCancelClick}
      >
        <MdClose size="2rem" />
      </Button>
      <form onSubmit={onSubmit}>
        <input
          className="font-light"
          ref={inputRef}
          type="text"
          placeholder="제목"
          value={keyword}
          onChange={onChange}
        />
        <Button variant="transparent circle" size="1.75rem" onClick={onSubmit}>
          <MdSearch size="2rem" />
        </Button>
      </form>
    </SearchBarStyled>
  );
}

export default withRouter(SearchBar);
