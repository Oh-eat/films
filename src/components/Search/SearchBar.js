import React, { useCallback, useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withRouter } from "react-router-dom";
import { MdClose, MdSearch } from "react-icons/md";
import { hideSearchBar } from "../../reducers/search";
import { SearchBarStyled } from "./styles";
import Button from "../common/Button";

function SearchBar({ history }) {
  const dispatch = useDispatch();
  const visible = useSelector(({ search }) => search.showSearchBar);
  const [keyword, setKeyword] = useState("");
  const inputRef = useRef(null);

  const onCancelClick = useCallback(() => {
    setKeyword("");
    dispatch(hideSearchBar());
  }, [dispatch]);
  const onChange = useCallback((e) => {
    setKeyword(e.target.value);
  }, []);
  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (keyword === "" || !keyword) return;
      history.push(`/search?query=${keyword}`);
      setKeyword("");
    },
    [keyword, history]
  );

  useEffect(() => {
    if (visible && inputRef.current) {
      inputRef.current.focus();
    }
  }, [visible]);

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
          ref={inputRef}
          type="text"
          placeholder="검색어"
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
