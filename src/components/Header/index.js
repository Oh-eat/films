import React from "react";
import { HeaderStyled, Spacer, HeaderWrapper } from "./styles";
import Logo from "./Logo";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";

function Header() {
  return (
    <>
      <HeaderStyled>
        <HeaderWrapper>
          <Logo />
          <HorizontalNav />
          <VerticalNav />
        </HeaderWrapper>
      </HeaderStyled>
      <Spacer />
    </>
  );
}

export default Header;
