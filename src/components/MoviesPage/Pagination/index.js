import React from "react";
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

function Pagination({ currentPage, lastPage }) {
  return (
    <PaginationStyled>
      <PrevWrapper>
        <Button variant="icon" to="?page=1">
          <MdFirstPage size="2rem" />
        </Button>
        <Button variant="icon" to={`?page=${currentPage - 1}`}>
          <MdNavigateBefore size="2rem" />
        </Button>
      </PrevWrapper>
      <PageNumberWrapper>
        {[...Array(10).keys()]
          .map((i) => i + 1)
          .map((i) => (
            <PageNumber key={i} currentPage={currentPage} page={i} />
          ))}
      </PageNumberWrapper>
      <NextWrapper>
        <Button variant="icon" to={`?page=${currentPage + 1}`}>
          <MdNavigateNext size="2rem" />
        </Button>
        <Button variant="icon" to={`?page=${lastPage}`}>
          <MdLastPage size="2rem" />
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
