import React from "react";
import { Helmet } from "react-helmet";
import { typeToKR } from "..";
import { NoContentStyled } from "./styles";

function NoContent({ children, type }) {
  return (
    <NoContentStyled>
      <Helmet>
        <title>FILMS - {typeToKR[type]}</title>
      </Helmet>
      <span className="emoticon">(O﹏o)</span>
      <strong>{children}</strong>
    </NoContentStyled>
  );
}

export default NoContent;
