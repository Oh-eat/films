import React from "react";
import { HoverableMenuItemStyled } from "./styles";
import MenuItemCaption from "./MenuItemCaption";

function ButtonMenuItem({ caption, to, onClick }) {
  return (
    <HoverableMenuItemStyled onClick={onClick}>
      <MenuItemCaption caption={caption} to={to} />
    </HoverableMenuItemStyled>
  );
}
export default ButtonMenuItem;
