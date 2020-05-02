import React, { useState, useCallback, useEffect } from "react";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import {
  PaginationStyled,
  PrevWrapper,
  PageNumberWrapper,
  NextWrapper,
  PageNumberStyled,
} from "./styles";
import Button from "../../common/Button";
import { NavLink } from "react-router-dom";
import debounce from "../../../lib/debounce";

function getPageNumbers(pageIndex, lastPage, size) {
  return [...Array(size).keys()]
    .map((page) => page + 1 + size * pageIndex)
    .filter((page) => page <= lastPage);
}

function Pagination({ currentPage, lastPage }) {
  const [size, setSize] = useState(10);
  const [currentPageIndex, setCurrentPageIndex] = useState(
    parseInt((currentPage - 1) / size)
  );
  const lastPageIndex = parseInt((lastPage - 1) / size);
  const hidePrev = currentPageIndex === 0;
  const hideNext = currentPageIndex >= lastPageIndex;

  const onResize = useCallback(() => {
    const size = window.matchMedia("(orientation: landscape)").matches ? 10 : 5;
    setSize(size);
  }, []);
  const debouncedOnResize = useCallback(debounce(onResize, 100), [onResize]);
  const onClickFirst = useCallback(() => {
    setCurrentPageIndex(0);
  }, []);
  const onClickPrev = useCallback(() => {
    setCurrentPageIndex((state) => state - 1);
  }, []);
  const onClickNext = useCallback(() => {
    setCurrentPageIndex((state) => state + 1);
  }, []);
  const onClickLast = useCallback(() => {
    setCurrentPageIndex(lastPageIndex);
  }, [lastPageIndex]);

  useEffect(() => {
    const size = window.matchMedia("(orientation: landscape)").matches ? 10 : 5;
    setSize(size);
    window.addEventListener("resize", debouncedOnResize);
    return () => {
      window.removeEventListener("resize", debouncedOnResize);
    };
  }, [debouncedOnResize]);

  useEffect(() => {
    setCurrentPageIndex(parseInt((currentPage - 1) / size));
  }, [currentPage, size]);

  return (
    <PaginationStyled>
      <PrevWrapper>
        <Button
          hidden={hidePrev}
          size="1.5rem"
          variant="icon"
          onClick={onClickFirst}
        >
          <MdFirstPage size="1.5rem" />
        </Button>
        <Button
          hidden={hidePrev}
          size="1.5rem"
          variant="icon"
          onClick={onClickPrev}
        >
          <MdNavigateBefore size="1.5rem" />
        </Button>
      </PrevWrapper>
      <PageNumberWrapper>
        {getPageNumbers(currentPageIndex, lastPage, size).map(
          (page) =>
            page <= lastPage && (
              <PageNumber key={page} currentPage={currentPage} page={page} />
            )
        )}
      </PageNumberWrapper>
      <NextWrapper>
        <Button
          hidden={hideNext}
          size="1.5rem"
          variant="icon"
          onClick={onClickNext}
        >
          <MdNavigateNext size="1.5rem" />
        </Button>
        <Button
          hidden={hideNext}
          size="1.5rem"
          variant="icon"
          onClick={onClickLast}
        >
          <MdLastPage size="1.5rem" />
        </Button>
      </NextWrapper>
    </PaginationStyled>
  );
}

function PageNumber({ currentPage, page }) {
  return (
    <PageNumberStyled className={currentPage === page && "selected"}>
      <NavLink to={`?page=${page}`}>{page}</NavLink>
    </PageNumberStyled>
  );
}

export default Pagination;
