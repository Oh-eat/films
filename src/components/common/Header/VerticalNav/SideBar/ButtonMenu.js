import React from "react";
import { VerticalMenuItemStyled } from "./styles";
import MenuItemCaption from "./MenuItemCaption";

function ButtonMenu({ caption, to, handleMenuClick }) {
  return (
    <VerticalMenuItemStyled onClick={handleMenuClick}>
      <MenuItemCaption to={to} caption={caption} />
    </VerticalMenuItemStyled>
  );
}

export default ButtonMenu;
