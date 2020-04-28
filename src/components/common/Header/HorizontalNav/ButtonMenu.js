import React from "react";
import { Link } from "react-router-dom";
import { MenuStyled } from "./styles";

function ButtonMenu({ caption, to, onClick }) {
  return (
    <MenuStyled onClick={onClick}>
      <h2 className="caption">
        {to ? <Link to={to}>{caption}</Link> : { caption }}
      </h2>
    </MenuStyled>
  );
}
export default ButtonMenu;
