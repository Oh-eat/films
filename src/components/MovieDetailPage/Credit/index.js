import React from "react";
import { CreditStyled } from "./styles";
import CreditSwiper from "./CreditSwiper";
import { isEmpty } from "../../../lib/isEmpty";
import NoContent from "../NoContent";

function Credit({ credit }) {
  return (
    <div
      style={{
        display: "grid",
        width: "100%",
        gridGap: "1rem",
        gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
        gridTemplateRows: "minmax(0, 30rem)",
        alignItems: "center",
      }}
    >
      <Cast cast={credit.cast} />
      <Crew crew={credit.crew} />
    </div>
  );
}

function Cast({ cast }) {
  return (
    <CreditStyled>
      <h2>출연진</h2>
      {isEmpty(cast) ? (
        <NoContent>등록된 출연진이 없습니다.</NoContent>
      ) : (
        <CreditSwiper people={cast} />
      )}
    </CreditStyled>
  );
}

function Crew({ crew }) {
  return (
    <CreditStyled>
      <h2>제작진</h2>
      {isEmpty(crew) ? (
        <NoContent>등록된 제작진이 없습니다.</NoContent>
      ) : (
        <CreditSwiper people={crew} />
      )}
    </CreditStyled>
  );
}

export default Credit;
