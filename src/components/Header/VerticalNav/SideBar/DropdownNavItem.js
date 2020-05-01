import React, { useCallback } from "react";
import {
  VerticalNavItemStyled,
  VerticalSubnavItemWrapper,
  VerticalSubnavItemStyled,
} from "./styles";
import NavItemCaption from "./NavItemCaption";
import SubnavItemCaption from "./SubnavItemCaption";

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
    <VerticalNavItemStyled>
      <NavItemCaption
        caption={caption}
        dropdown
        selected={selected}
        onClick={handleSelected}
      />
      <VerticalSubnavItemWrapper
        className={selected && "visible"}
        onClick={handleSubnavClick}
        itemCount={subnavs.length}
      >
        {subnavs.map(({ caption, to }, index) => (
          <SubnavItem key={index} caption={caption} to={to} />
        ))}
      </VerticalSubnavItemWrapper>
    </VerticalNavItemStyled>
  );
}

function SubnavItem({ caption, to }) {
  return (
    <VerticalSubnavItemStyled>
      <SubnavItemCaption caption={caption} to={to} />
    </VerticalSubnavItemStyled>
  );
}

export default DropdownNavItem;
