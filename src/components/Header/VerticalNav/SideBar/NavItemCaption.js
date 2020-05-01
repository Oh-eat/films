import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { VerticalNavItemCaptionStyled } from "./styles";

function NavItemCaption({ caption, to, dropdown, selected, onClick }) {
  return (
    <VerticalNavItemCaptionStyled dropdown={dropdown} onClick={onClick}>
      {dropdown ? (
        <>
          <span className={`arrow ${selected && "selected"}`}>
            <MdArrowDropDown />
          </span>
          <span>{caption}</span>
        </>
      ) : (
        <Link to={to}>{caption}</Link>
      )}
    </VerticalNavItemCaptionStyled>
  );
}

export default NavItemCaption;
