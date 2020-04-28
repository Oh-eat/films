import React from "react";
import { MenuWrapperStyled } from "./styles";
import ButtonMenu from "./ButtonMenu";
import HoverableMenu from "./HoverableMenu";
import sitemap from "../../../../lib/sitemap";

function MenuWrapper({ children }) {
  return <MenuWrapperStyled>{children}</MenuWrapperStyled>;
}

function HorizontalNav() {
  return (
    <nav id="HorizontalNav">
      <MenuWrapper>
        {sitemap.map(({ caption, to, submenus }, index) =>
          submenus ? (
            <HoverableMenu key={index} caption={caption} submenus={submenus} />
          ) : (
            <ButtonMenu key={index} caption={caption} to={to} />
          )
        )}
      </MenuWrapper>
    </nav>
  );
}

export default HorizontalNav;
