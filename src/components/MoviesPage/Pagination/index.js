import React, { useState, useCallback, useEffect } from "react";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import qs from "qs";
import {
  PaginationStyled,
  PrevWrapper,
  PageNumberWrapper,
  NextWrapper,
} from "./styles";
import Button from "../../common/Button";
import useDebounce from "../../../lib/useDebounce";
import checkEnoughWidth from "../../../lib/checkEnoughWidth";
import { withRouter } from "react-router-dom";

function getPageNumbers(pageIndex, lastPage, size) {
  return [...Array(size).keys()]
    .map((page) => page + 1 + size * pageIndex)
    .filter((page) => page <= lastPage);
}

function getPageIndex(page, size) {
  return parseInt((page - 1) / size);
}

function buildPageUrl(path, query, page) {
  return `${path}?${qs.stringify({ ...query, page })}`;
}

function Pagination({ currentPage, lastPage, location, match }) {
  const [size, setSize] = useState(10);
  const [currentPageIndex, setCurrentPageIndex] = useState(
    getPageIndex(currentPage, size)
  );
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { path } = match;
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
  const [debouncedOnResize, timer] = useDebounce(onResize, 100);

  useEffect(() => {
    const size = checkEnoughWidth() ? 10 : 5;
    setSize(size);
    window.addEventListener("resize", debouncedOnResize);
    return () => {
      window.removeEventListener("resize", debouncedOnResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearTimeout(timer.current);
    };
  }, [debouncedOnResize, timer]);

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
              <PageNumber
                key={page}
                selected={currentPage === page}
                to={buildPageUrl(path, query, page)}
                page={page}
              />
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

function PageNumber({ selected, to, page }) {
  return (
    // <PageNumberStyled className={currentPage === page && "selected"}>
    //   <NavLink to={`?page=${page}`}>{page}</NavLink>
    // </PageNumberStyled>
    <li>
      <Button
        variant={`${selected ? "outlined circle" : "transparent circle"}`}
        size="1rem"
        fontSize="0.75rem"
        to={to}
        color="default"
      >
        {page}
      </Button>
    </li>
  );
}

export default withRouter(Pagination);
