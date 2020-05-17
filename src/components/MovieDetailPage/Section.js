import React from "react";
import { SectionStyled } from "./styles";

function Section({ state, children }) {
  return (
    <SectionStyled className={state}>
      <div className="content-wrapper">{children}</div>
    </SectionStyled>
  );
}

export default Section;
