import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { VerticalMenuItemCaptionStyled } from "./styles";

function MenuItemCaption({ caption, to, dropdown, selected, onClick }) {
  return (
    <VerticalMenuItemCaptionStyled dropdown={dropdown} onClick={onClick}>
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
    </VerticalMenuItemCaptionStyled>
  );
}

export default MenuItemCaption;
