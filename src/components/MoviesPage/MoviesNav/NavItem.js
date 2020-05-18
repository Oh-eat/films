import React from "react";
import { NavLink } from "react-router-dom";
import { MoviesNavItemStyled } from "./styles";

function NavItem({ caption, to }) {
  return (
    <MoviesNavItemStyled>
      <NavLink activeClassName="selected" className="caption font-bold" to={to}>
        {caption}
      </NavLink>
    </MoviesNavItemStyled>
  );
}

export default NavItem;
