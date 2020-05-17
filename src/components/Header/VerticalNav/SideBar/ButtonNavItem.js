import React from "react";
import { Link } from "react-router-dom";
import { ButtonNavItemStyled } from "./styles";

function ButtonNavItem({ caption, to, handleMenuClick }) {
  return (
    <ButtonNavItemStyled onClick={handleMenuClick}>
      <Link to={to}>{caption}</Link>
    </ButtonNavItemStyled>
  );
}

export default ButtonNavItem;
