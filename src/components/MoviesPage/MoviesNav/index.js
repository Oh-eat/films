import React from "react";
import { withRouter } from "react-router-dom";
import sitemap from "../../../lib/sitemap";
import NavItem from "./NavItem";
import { MoviesNavStyled, MoviesNavItemWrapper } from "./styles";

function MoviesNav({ match }) {
  const sitemapIndex = match.path === "/movies" ? 1 : 2;
  return (
    <MoviesNavStyled>
      <MoviesNavItemWrapper>
        {sitemap[sitemapIndex].subnavs.map(({ caption, to }, index) => (
          <NavItem key={index} caption={caption} to={to} />
        ))}
      </MoviesNavItemWrapper>
    </MoviesNavStyled>
  );
}

export default withRouter(MoviesNav);
