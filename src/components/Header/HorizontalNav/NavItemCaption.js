import React from "react";
import { HorizontalNavItemCaptionStyled } from "./styles";
import { Link } from "react-router-dom";

function NavItemCaption({ caption, to }) {
  return (
    <HorizontalNavItemCaptionStyled>
      {to ? <Link to={to}>{caption}</Link> : caption}
    </HorizontalNavItemCaptionStyled>
  );
}

export default NavItemCaption;
