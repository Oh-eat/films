import React from "react";
import { HorizontalNavItemWrapper, HorizontalNavStyled } from "./styles";
import ButtonNavItem from "./ButtonNavItem";
import HoverableNavItem from "./HoverableNavItem";
import sitemap from "../../../lib/sitemap";
import SearchButton from "../../Search/SearchButton";

function HorizontalNav() {
  return (
    <HorizontalNavStyled>
      <SearchButton />
      <HorizontalNavItemWrapper>
        {sitemap.map(({ caption, to, subnavs }, index) =>
          subnavs ? (
            <HoverableNavItem key={index} caption={caption} subnavs={subnavs} />
          ) : (
            <ButtonNavItem key={index} caption={caption} to={to} />
          )
        )}
      </HorizontalNavItemWrapper>
    </HorizontalNavStyled>
  );
}

export default HorizontalNav;
