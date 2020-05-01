import React from "react";
import { HoverableNavItemStyled } from "./styles";
import NavItemCaption from "./NavItemCaption";

function ButtonNavItem({ caption, to, onClick }) {
  return (
    <HoverableNavItemStyled onClick={onClick}>
      <NavItemCaption caption={caption} to={to} />
    </HoverableNavItemStyled>
  );
}
export default ButtonNavItem;
