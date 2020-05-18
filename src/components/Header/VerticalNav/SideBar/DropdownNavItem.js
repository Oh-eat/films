import React from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import {
  VerticalSubnavItemWrapper,
  VerticalSubnavItemStyled,
  DropdownNavItemStyled,
} from "./styles";

function DropdownNavItem({ caption, subnavs, selected, onClick }) {
  return (
    <DropdownNavItemStyled>
      <span className="caption" onClick={onClick}>
        <div className={`arrow${selected ? " selected" : ""}`}>
          <MdArrowDropDown />
        </div>
        {caption}
      </span>
      <VerticalSubnavItemWrapper
        className={selected ? "visible" : ""}
        itemCount={subnavs.length}
      >
        {subnavs.map(({ caption, to }, index) => (
          <SubnavItem key={index} caption={caption} to={to} />
        ))}
      </VerticalSubnavItemWrapper>
    </DropdownNavItemStyled>
  );
}

function SubnavItem({ caption, to }) {
  return (
    <VerticalSubnavItemStyled>
      <Link className="caption font-light" to={to}>
        {caption}
      </Link>
    </VerticalSubnavItemStyled>
  );
}

export default React.memo(DropdownNavItem);
