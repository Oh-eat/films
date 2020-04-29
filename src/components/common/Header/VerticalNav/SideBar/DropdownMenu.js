import React, { useCallback } from "react";
import {
  VerticalMenuItemStyled,
  VerticalSubmenuWrapperStyled,
  VerticalSubmenuItemStyled,
} from "./styles";
import MenuItemCaption from "./MenuItemCaption";
import SubmenuItemCaption from "./SubmenuItemCaption";

function DropdownMenuItem({
  index,
  caption,
  submenus,
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

  const handleSubmenuClick = useCallback(() => {
    handleMenuClick();
  }, [handleMenuClick]);

  return (
    <VerticalMenuItemStyled>
      <MenuItemCaption
        caption={caption}
        dropdown
        selected={selected}
        onClick={handleSelected}
      />
      <VerticalSubmenuWrapperStyled
        className={selected && "visible"}
        onClick={handleSubmenuClick}
        itemCount={submenus.length}
      >
        {submenus.map(({ caption, to }, index) => (
          <SubmenuItem key={index} caption={caption} to={to} />
        ))}
      </VerticalSubmenuWrapperStyled>
    </VerticalMenuItemStyled>
  );
}

function SubmenuItem({ caption, to }) {
  return (
    <VerticalSubmenuItemStyled>
      <SubmenuItemCaption caption={caption} to={to} />
    </VerticalSubmenuItemStyled>
  );
}

export default DropdownMenuItem;
