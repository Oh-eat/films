import React from "react";
import { SummaryStyled } from "./styles";
import { isEmpty } from "../../../lib/isEmpty";
import NoContent from "../NoContent";

function Summary({ tagline, overview }) {
  return (
    <SummaryStyled>
      <h2>개요</h2>
      {!isEmpty(tagline) && <em>{tagline}</em>}
      {!isEmpty(overview) && <p>{overview}</p>}
      {isEmpty(tagline + overview) && (
        <NoContent>작성된 내용이 없습니다.</NoContent>
      )}
    </SummaryStyled>
  );
}

export default Summary;
