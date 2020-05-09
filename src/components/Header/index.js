import React, { useState, useCallback, useEffect } from "react";
import { HeaderStyled, Spacer, HeaderWrapper } from "./styles";
import Logo from "./Logo";
import HorizontalNav from "./HorizontalNav";
import VerticalNav from "./VerticalNav";

export function initializeHeader() {
  // document.getElementById("header").classList.remove("hidden", "dark");
}

function Header() {
  // const [hidden, setHidden] = useState(false);
  // const [dark, setDark] = useState(false);
  // const lastScrollTop = useRef(0);

  // const onScroll = useCallback(() => {
  //   const scrollbar = document.getElementById("scrollbar");
  //   const header = document.getElementById("header");
  //   if (scrollbar && header && scrollbar.scrollTop) {
  //     if (
  //       scrollbar.scrollTop > lastScrollTop.current &&
  //       scrollbar.scrollTop > header.clientHeight
  //     ) {
  //       setHidden(true);
  //       setDark(false);
  //     } else {
  //       setHidden(false);
  //       if (scrollbar.scrollTop <= header.clientHeight) {
  //         setDark(false);
  //       } else {
  //         setDark(true);
  //       }
  //     }
  //   }
  //   lastScrollTop.current = scrollbar.scrollTop || 0;
  // }, []);
  // const throttledOnScroll = useCallback(throttle(onScroll, 33), []);

  // useEffect(() => {
  //   const scrollbar = document.getElementById("scrollbar");
  //   scrollbar.addEventListener("scroll", throttledOnScroll);
  //   return () => {
  //     scrollbar.removeEventListener("scroll", throttledOnScroll);
  //   };
  // }, [throttledOnScroll]);

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
