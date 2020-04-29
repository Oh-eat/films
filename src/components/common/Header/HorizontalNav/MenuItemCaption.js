import React from "react";
import { HorizontalMenuItemCaptionStyled } from "./styles";
import { Link } from "react-router-dom";

function MenuItemCaption({ caption, to }) {
  return (
    <HorizontalMenuItemCaptionStyled>
      {to ? <Link to={to}>{caption}</Link> : caption}
    </HorizontalMenuItemCaptionStyled>
  );
}

export default MenuItemCaption;
