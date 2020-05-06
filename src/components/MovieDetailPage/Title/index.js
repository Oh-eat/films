import React from "react";
import { TitleStyled } from "./styles";

function Title({ title, originalTitle }) {
  return (
    <TitleStyled>
      <h1>{title}</h1>
      {title !== originalTitle && <h2>{originalTitle}</h2>}
    </TitleStyled>
  );
}

export default Title;
