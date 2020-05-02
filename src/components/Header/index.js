import React from "react";
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

  return (
    <>
      <HeaderStyled
        id="header"
        // className={`${hidden && "hidden"} ${dark && "dark"}`}
      >
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
