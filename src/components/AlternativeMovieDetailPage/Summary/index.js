import React from "react";
import { SummaryStyled } from "./styles";
import { isEmpty } from "../../../lib/isEmpty";

function Summary({ tagline, overview, state }) {
  return (
    <SummaryStyled className={state}>
      <div className="content-wrapper">
        {!isEmpty(tagline) && <em>{tagline}</em>}
        {!isEmpty(overview) && <p>{overview}</p>}
      </div>
    </SummaryStyled>
  );
}

export default Summary;
