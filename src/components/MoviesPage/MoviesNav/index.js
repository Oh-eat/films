import React from "react";
import { MoviesNavStyled, MoviesNavItemWrapper } from "./styles";
import sitemap from "../../../lib/sitemap";
import NavItem from "./NavItem";
import { withRouter } from "react-router-dom";

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
