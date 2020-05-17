import React from "react";
import { NavItemStyled } from "./styles";
import { Link } from "react-router-dom";

function ButtonNavItem({ caption, to }) {
  return (
    <NavItemStyled>
      <Link to={to}>{caption}</Link>
    </NavItemStyled>
  );
}

export default ButtonNavItem;
