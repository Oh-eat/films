import React from "react";
import { PageMainStyled, PageMainWrapper } from "./styles";

function PageMain({ children }) {
  // const onResize = useCallback(() => {
  //   const main = document.getElementById("main");
  //   main.style.width = "100%";
  //   const gap = main.offsetWidth - main.clientWidth;
  //   main.style.width = `${main.offsetWidth + gap + 1}px`;
  // }, []);

  // useEffect(() => {
  //   onResize();
  //   window.addEventListener("resize", onResize);
  //   return () => {
  //     window.removeEventListener("resize", onResize);
  //   };
  // }, [onResize]);

  return (
    <>
      <PageMainStyled id="main">
        <PageMainWrapper>{children}</PageMainWrapper>
      </PageMainStyled>
    </>
  );
}

export default PageMain;
