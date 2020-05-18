import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import { NavItemStyled, SubnavIemWrapper, SubnavItemStyled } from "./styles";

function getChildrenWidthSum(element) {
  let widthSum = 0;
  for (var i = 0; i < element.children.length; i++) {
    widthSum += element.children[i].clientWidth;
  }
  return `${widthSum}px`;
}

function FlexibleNavItem({ subnavs, caption, onClick, selected }) {
  const subnavWrapperRef = useRef(null);

  return (
    <NavItemStyled onClick={onClick}>
      <span className="caption">
        {caption}
        <div className={`arrow${selected ? " selected" : ""}`}>
          <MdArrowDropDown size="1.5rem" />
        </div>
      </span>
      <SubnavIemWrapper
        ref={subnavWrapperRef}
        style={{
          maxWidth: selected
            ? getChildrenWidthSum(subnavWrapperRef.current)
            : "0",
        }}
      >
        {subnavs.map((subnav) => (
          <SubnavItem key={subnav.caption} subnav={subnav} />
        ))}
      </SubnavIemWrapper>
    </NavItemStyled>
  );
}

function SubnavItem({ subnav }) {
  return (
    <SubnavItemStyled key={subnav.caption}>
      <Link className="caption font-light" to={subnav.to}>
        {subnav.caption}
      </Link>
    </SubnavItemStyled>
  );
}

export default FlexibleNavItem;
