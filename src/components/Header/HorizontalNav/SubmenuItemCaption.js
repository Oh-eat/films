import React from "react";
import { HorizontalSubmenuItemCaptionStyled } from "./styles";
import { Link } from "react-router-dom";

function SubmenuItemCaption({ caption, to }) {
  return (
    <HorizontalSubmenuItemCaptionStyled>
      <Link to={to}>{caption}</Link>
    </HorizontalSubmenuItemCaptionStyled>
  );
}

export default SubmenuItemCaption;
