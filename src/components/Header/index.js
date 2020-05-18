import React, { useState, useCallback, useEffect } from "react";
import { HeaderStyled, Spacer, HeaderWrapper } from "./styles";
import Logo from "./Logo";
import VerticalNav from "./VerticalNav";
import HorizontalNav from "./HorizontalNav";

function Header() {
  const [showVerticalNav, setShowVerticalNav] = useState(false);

  const onResize = useCallback(() => {
    setShowVerticalNav(window.innerWidth < 1024);
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return (
    <>
      <HeaderStyled
        id="header"
        // className={`${hidden && "hidden"} ${dark && "dark"}`}
      >
        <HeaderWrapper>
          <Logo />
          {showVerticalNav ? <VerticalNav /> : <HorizontalNav />}
        </HeaderWrapper>
      </HeaderStyled>
      <Spacer />
    </>
  );
}

export default Header;
