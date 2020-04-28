import React, { useCallback } from "react";
import { MdArrowDropDown } from "react-icons/md";
import { MenuStyled, SubmenuWrapperStyled, SubmenuStyled } from "./styles";
import { Link } from "react-router-dom";

function DropdownMenu({
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
    <MenuStyled>
      <h2 className="caption" onClick={handleSelected}>
        <span className={`arrow ${selected && "selected"}`}>
          <MdArrowDropDown />
        </span>
        <span>{caption}</span>
      </h2>
      <SubmenuWrapperStyled
        className={selected && "visible"}
        onClick={handleSubmenuClick}
        itemCount={submenus.length}
      >
        {submenus.map(({ caption, to }, index) => (
          <Submenu key={index} caption={caption} to={to} />
        ))}
      </SubmenuWrapperStyled>
    </MenuStyled>
  );
}

function Submenu({ caption, to }) {
  return (
    <SubmenuStyled className="submenu">
      <h3 className="caption">
        <Link to={to}>{caption}</Link>
      </h3>
    </SubmenuStyled>
  );
}

export default DropdownMenu;
