import React from "react";
import { AlternativeNavItemStyled } from "./styles";
import { Link } from "react-router-dom";

function ButtonNavItem({ caption, to }) {
  return (
    <AlternativeNavItemStyled>
      <Link to={to}>{caption}</Link>
    </AlternativeNavItemStyled>
  );
}

export default ButtonNavItem;
