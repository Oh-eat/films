import React from "react";
import { HorizontalNavItemWrapper, HorizontalNavStyled } from "./styles";
import ButtonNavItem from "./ButtonNavItem";
import HoverableNavItem from "./HoverableNavItem";
import sitemap from "../../../lib/sitemap";
import Button from "../../common/Button";
import { MdSearch } from "react-icons/md";

function HorizontalNav() {
  return (
    <HorizontalNavStyled>
      <Button variant="icon">
        <MdSearch size="2rem" />
      </Button>
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
