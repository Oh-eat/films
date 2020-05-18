import React from "react";
import { Link } from "react-router-dom";
import { ButtonNavItemStyled } from "./styles";

function ButtonNavItem({ caption, to }) {
  return (
    <ButtonNavItemStyled>
      <Link className="caption" to={to}>
        {caption}
      </Link>
    </ButtonNavItemStyled>
  );
}

export default ButtonNavItem;
