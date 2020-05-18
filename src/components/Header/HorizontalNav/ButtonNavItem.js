import React from "react";
import { Link } from "react-router-dom";
import { NavItemStyled } from "./styles";

function ButtonNavItem({ caption, to, onClick }) {
  return (
    <NavItemStyled onClick={onClick}>
      <Link className="caption" to={to}>
        {caption}
      </Link>
    </NavItemStyled>
  );
}

export default ButtonNavItem;
