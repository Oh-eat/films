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
} from "./styles";
import Button from "../../common/Button";
import debounce from "../../../lib/debounce";
import checkEnoughWidth from "../../../lib/checkEnoughWidth";

function getPageNumbers(pageIndex, lastPage, size) {
  return [...Array(size).keys()]
    .map((page) => page + 1 + size * pageIndex)
    .filter((page) => page <= lastPage);
}

function getPageIndex(page, size) {
  return parseInt((page - 1) / size);
}

function Pagination({ currentPage, lastPage }) {
  const [size, setSize] = useState(10);
  const [currentPageIndex, setCurrentPageIndex] = useState(
    getPageIndex(currentPage, size)
  );
  const lastPageIndex = getPageIndex(lastPage, size);
  const hidePrev = currentPageIndex === 0;
  const hideNext = currentPageIndex >= lastPageIndex;

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
  const onResize = useCallback(() => {
    const size = checkEnoughWidth() ? 10 : 5;
    setSize(size);
  }, []);
  const debouncedOnResize = useCallback(debounce(onResize, 100), [onResize]);

  useEffect(() => {
    const size = checkEnoughWidth() ? 10 : 5;
    setSize(size);
    window.addEventListener("resize", debouncedOnResize);
    return () => {
      window.removeEventListener("resize", debouncedOnResize);
    };
  }, [debouncedOnResize]);

  useEffect(() => {
    setCurrentPageIndex(getPageIndex(currentPage, size));
  }, [currentPage, size]);

  return (
    <PaginationStyled>
      <PrevWrapper>
        <Button
          hidden={hidePrev}
          size="1rem"
          variant="transparent circle"
          onClick={onClickFirst}
        >
          <MdFirstPage size="1.5rem" />
        </Button>
        <Button
          hidden={hidePrev}
          size="1rem"
          variant="transparent circle"
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
          size="1rem"
          variant="transparent circle"
          onClick={onClickNext}
        >
          <MdNavigateNext size="1.5rem" />
        </Button>
        <Button
          hidden={hideNext}
          size="1rem"
          variant="transparent circle"
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
    // <PageNumberStyled className={currentPage === page && "selected"}>
    //   <NavLink to={`?page=${page}`}>{page}</NavLink>
    // </PageNumberStyled>
    <Button
      variant={`${
        currentPage === page ? "outlined circle" : "transparent circle"
      }`}
      size="1rem"
      fontSize="0.75rem"
      to={`?page=${page}`}
      color="default"
    >
      {page}
    </Button>
  );
}

export default Pagination;
