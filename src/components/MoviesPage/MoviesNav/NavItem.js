import React from "react";
import { MoviesNavItemStyled } from "./styles";
import NavItemCaption from "./NavItemCaption";

function NavItem({ caption, to }) {
  return (
    <MoviesNavItemStyled>
      <NavItemCaption caption={caption} to={to} />
    </MoviesNavItemStyled>
  );
}

export default NavItem;
