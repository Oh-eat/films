import React from "react";
import { LogoStyled } from "./styles";
import { Link } from "react-router-dom";

function Logo(props) {
  return (
    <LogoStyled>
      <Link to="/">films</Link>
    </LogoStyled>
  );
}

export default Logo;
