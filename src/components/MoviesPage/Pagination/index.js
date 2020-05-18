import React, { useState, useCallback, useEffect } from "react";
import { withRouter } from "react-router-dom";
import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import useDebounce from "../../../lib/useDebounce";
import checkEnoughWidth from "../../../lib/checkEnoughWidth";
import qs from "qs";
import Button from "../../common/Button";
import {
  PaginationStyled,
  PrevWrapper,
  PageNumberWrapper,
  NextWrapper,
  PageNumberStyled,
} from "./styles";

function getPageNumbers(pageGroup, lastPage, size) {
  return [...Array(size).keys()]
    .map((page) => page + 1 + size * pageGroup)
    .filter((page) => page <= lastPage);
}

function getPageGroup(page, size) {
  return parseInt((page - 1) / size);
}

function buildPageUrl(path, query, page) {
  return `${path}?${qs.stringify({ ...query, page })}`;
}

function Pagination({ currentPage, lastPage, location, match }) {
  const [size, setSize] = useState(10);
  const [currentpageGroup, setCurrentpageGroup] = useState(
    getPageGroup(currentPage, size)
  );
  const query = qs.parse(location.search, { ignoreQueryPrefix: true });
  const { path } = match;
  const lastpageGroup = getPageGroup(lastPage, size);
  const hidePrev = currentpageGroup === 0;
  const hideNext = currentpageGroup >= lastpageGroup;

  const onClickFirst = useCallback(() => {
    setCurrentpageGroup(0);
  }, []);
  const onClickPrev = useCallback(() => {
    setCurrentpageGroup((state) => state - 1);
  }, []);
  const onClickNext = useCallback(() => {
    setCurrentpageGroup((state) => state + 1);
  }, []);
  const onClickLast = useCallback(() => {
    setCurrentpageGroup(lastpageGroup);
  }, [lastpageGroup]);
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
    setCurrentpageGroup(getPageGroup(currentPage, size));
  }, [currentPage, size]);

  return (
    <PaginationStyled>
      <PrevWrapper>
        {!hidePrev && (
          <PrevButtons onClickFirst={onClickFirst} onClickPrev={onClickPrev} />
        )}
      </PrevWrapper>
      <PageNumberWrapper>
        {getPageNumbers(currentpageGroup, lastPage, size).map(
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
        {!hideNext && (
          <NextButtons onClickLast={onClickLast} onClickNext={onClickNext} />
        )}
      </NextWrapper>
    </PaginationStyled>
  );
}

function PrevButtons({ onClickFirst, onClickPrev }) {
  return (
    <>
      <Button size="1rem" variant="transparent circle" onClick={onClickFirst}>
        <MdFirstPage size="1.5rem" />
      </Button>
      <Button size="1rem" variant="transparent circle" onClick={onClickPrev}>
        <MdNavigateBefore size="1.5rem" />
      </Button>
    </>
  );
}

function NextButtons({ onClickLast, onClickNext }) {
  return (
    <>
      <Button size="1rem" variant="transparent circle" onClick={onClickNext}>
        <MdNavigateNext size="1.5rem" />
      </Button>
      <Button size="1rem" variant="transparent circle" onClick={onClickLast}>
        <MdLastPage size="1.5rem" />
      </Button>
    </>
  );
}

function PageNumber({ selected, to, page }) {
  return (
    <PageNumberStyled>
      <Button
        variant={`${selected ? "outlined circle" : "transparent circle"}`}
        size="1rem"
        fontSize="0.75rem"
        to={to}
        color="default"
      >
        {page}
      </Button>
    </PageNumberStyled>
  );
}

export default withRouter(Pagination);
