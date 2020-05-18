import React from "react";
import { isEmpty } from "../../../lib/isEmpty";
import { SummaryStyled } from "./styles";

function Summary({ tagline, overview, state }) {
  return (
    <SummaryStyled className={state}>
      <div className="content-wrapper">
        {!isEmpty(tagline) && <em>{tagline}</em>}
        {!isEmpty(overview) && <p className="font-light">{overview}</p>}
      </div>
    </SummaryStyled>
  );
}

export default Summary;
