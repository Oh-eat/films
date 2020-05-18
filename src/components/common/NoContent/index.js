import React from "react";
import { NoContentStyled } from "./styles";

function NoContent({ children }) {
  return (
    <NoContentStyled>
      <span className="emoticon">(O﹏o)</span>
      <strong>{children}</strong>
    </NoContentStyled>
  );
}

export default NoContent;
