import React from "react";
import { MenuStyled } from "./styles";
import { Link } from "react-router-dom";

function ButtonMenu({ caption, to, handleMenuClick }) {
  return (
    <MenuStyled onClick={handleMenuClick}>
      <h2 className="caption">
        <div></div>
        <Link to={to}>{caption}</Link>
      </h2>
    </MenuStyled>
  );
}

export default ButtonMenu;
