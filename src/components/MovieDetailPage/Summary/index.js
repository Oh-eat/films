import React from "react";
import { SummaryStyled } from "./styles";

function Summary({ tagline, overview }) {
  return (
    <SummaryStyled>
      <h2>개요</h2>
      <h3>{tagline}</h3>
      <p>{overview}</p>
    </SummaryStyled>
  );
}

export default Summary;
