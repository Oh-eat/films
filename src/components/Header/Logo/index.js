import React from "react";
import { Link } from "react-router-dom";
import { LogoStyled } from "./styles";

function Logo() {
  return (
    <LogoStyled>
      <Link to="/">films</Link>
    </LogoStyled>
  );
}

export default Logo;
