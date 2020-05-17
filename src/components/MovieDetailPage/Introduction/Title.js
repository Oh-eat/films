import React from "react";
import { TitleStyled } from "./styles";

function Title({ title, originalTitle, year }) {
  return (
    <TitleStyled>
      <h1>{title}</h1>
      {title !== originalTitle && (
        <span className="original-title">{originalTitle}</span>
      )}
      <span className="year">{year}</span>
    </TitleStyled>
  );
}

export default Title;
