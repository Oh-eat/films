import React, { useCallback } from "react";
import { MdArrowDropDown } from "react-icons/md";
import {
  VerticalSubnavItemWrapper,
  VerticalSubnavItemStyled,
  DropdownNavItemStyled,
} from "./styles";
import { Link } from "react-router-dom";

function DropdownNavItem({
  index,
  caption,
  subnavs,
  selected,
  setSelected,
  handleMenuClick,
}) {
  const handleSelected = useCallback(() => {
    if (selected) {
      setSelected(null);
    } else {
      setSelected(index);
    }
  }, [selected, setSelected, index]);

  const handleSubnavClick = useCallback(() => {
    handleMenuClick();
  }, [handleMenuClick]);

  return (
    <DropdownNavItemStyled>
      <div className="caption" onClick={handleSelected}>
        <span className={`arrow ${selected && "selected"}`}>
          <MdArrowDropDown />
        </span>
        <span>{caption}</span>
      </div>
      <VerticalSubnavItemWrapper
        className={selected && "visible"}
        onClick={handleSubnavClick}
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
      <Link to={to}>{caption}</Link>
    </VerticalSubnavItemStyled>
  );
}

export default React.memo(DropdownNavItem);
