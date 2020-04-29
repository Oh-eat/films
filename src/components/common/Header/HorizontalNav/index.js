import React from "react";
import { HorizontalMenuWrapperStyled, HorizontalNavStyled } from "./styles";
import ButtonMenuItem from "./ButtonMenuItem";
import HoverableMenuItem from "./HoverableMenuItem";
import sitemap from "../../../../lib/sitemap";
import Button from "../../Button";
import { MdSearch } from "react-icons/md";

function HorizontalMenuWrapper({ children }) {
  return <HorizontalMenuWrapperStyled>{children}</HorizontalMenuWrapperStyled>;
}

function HorizontalNav() {
  return (
    <HorizontalNavStyled>
      <Button variant="icon">
        <MdSearch size="2rem" />
      </Button>
      <HorizontalMenuWrapper>
        {sitemap.map(({ caption, to, submenus }, index) =>
          submenus ? (
            <HoverableMenuItem
              key={index}
              caption={caption}
              submenus={submenus}
            />
          ) : (
            <ButtonMenuItem key={index} caption={caption} to={to} />
          )
        )}
      </HorizontalMenuWrapper>
    </HorizontalNavStyled>
  );
}

export default HorizontalNav;
