import React from "react";
import { PageMainStyled, PageMainWrapper } from "./styles";

function PageMain({ children }) {
  return (
    <PageMainStyled>
      <PageMainWrapper>{children}</PageMainWrapper>
    </PageMainStyled>
  );
}

export default PageMain;
