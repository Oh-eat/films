import React from "react";
import { MoviesNavItemCaptionStyled } from "./styles";
import { NavLink } from "react-router-dom";

function NavItemCaption({ caption, to }) {
  return (
    <MoviesNavItemCaptionStyled>
      <NavLink activeClassName="selected" to={to}>
        {caption}
      </NavLink>
    </MoviesNavItemCaptionStyled>
  );
}

export default NavItemCaption;
