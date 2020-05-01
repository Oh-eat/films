import React from "react";
import { MoviesNavStyled, MoviesNavItemWrapper } from "./styles";
import sitemap from "../../../lib/sitemap";
import NavItem from "./NavItem";

function MoviesNav() {
  return (
    <MoviesNavStyled>
      <MoviesNavItemWrapper>
        {sitemap[1].subnavs.map(({ caption, to }, index) => (
          <NavItem key={index} caption={caption} to={to} />
        ))}
      </MoviesNavItemWrapper>
    </MoviesNavStyled>
  );
}

export default MoviesNav;
