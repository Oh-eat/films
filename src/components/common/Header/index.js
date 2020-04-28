import React from "react";
import { HeaderStyled, Spacer } from "./styles";
import Logo from "./Logo";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";

function Header() {
  return (
    <>
      <HeaderStyled>
        <Logo />
        <HorizontalNav />
        <VerticalNav />
      </HeaderStyled>
      <Spacer />
    </>
  );
}

export default Header;
