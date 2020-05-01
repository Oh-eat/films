import React from "react";
import { VerticalNavItemStyled } from "./styles";
import NavItemCaption from "./NavItemCaption";

function ButtonNavItem({ caption, to, handleMenuClick }) {
  return (
    <VerticalNavItemStyled onClick={handleMenuClick}>
      <NavItemCaption to={to} caption={caption} />
    </VerticalNavItemStyled>
  );
}

export default ButtonNavItem;
