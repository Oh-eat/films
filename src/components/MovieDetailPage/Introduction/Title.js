import React from "react";
import { TitleStyled } from "./styles";

function Title({ title, originalTitle, year }) {
  return (
    <TitleStyled>
      <h1 className="title">{title}</h1>
      {title !== originalTitle && (
        <span className="original-title font-light">{originalTitle}</span>
      )}
      <span className="year font-light">{year}</span>
    </TitleStyled>
  );
}

export default Title;
