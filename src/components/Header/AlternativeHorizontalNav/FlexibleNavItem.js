import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { MdArrowDropDown } from "react-icons/md";
import {
  AlternativeNavItemStyled,
  AlternativeSubnavIemWrapper,
  AlternativeSubnavItemStyled,
} from "./styles";

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
    <AlternativeNavItemStyled onClick={onClick}>
      <span>
        {caption}
        <div className={`arrow ${selected ? "selected" : ""}`}>
          <MdArrowDropDown size="1.5rem" />
        </div>
      </span>
      <AlternativeSubnavIemWrapper
        ref={subnavWrapperRef}
        style={{
          maxWidth: selected
            ? getChildrenWidthSum(subnavWrapperRef.current)
            : "0",
        }}
      >
        {subnavs.map((subnav) => (
          <AlternativeSubnavItemStyled key={subnav.caption}>
            <Link to={subnav.to}>{subnav.caption}</Link>
          </AlternativeSubnavItemStyled>
        ))}
      </AlternativeSubnavIemWrapper>
    </AlternativeNavItemStyled>
  );
}

export default FlexibleNavItem;
