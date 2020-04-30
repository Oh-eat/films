import React, { useState, useCallback } from "react";
import {
  HoverableMenuItemStyled,
  HoverableSubmenuWrapperStyled,
  HoverableSubmenuItemStyled,
} from "./styles";
import MenuItemCaption from "./MenuItemCaption";
import SubmenuItemCaption from "./SubmenuItemCaption";

function HoverableMenuItem({ submenus, caption }) {
  const [visible, setVisible] = useState(false);

  const setVisibleTrue = useCallback(() => {
    setVisible(true);
  }, []);
  const setVisibleFalse = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <HoverableMenuItemStyled
      onMouseEnter={setVisibleTrue}
      onMouseLeave={setVisibleFalse}
    >
      <MenuItemCaption caption={caption} />
      <HoverableSubmenuWrapperStyled
        className={visible && "visible"}
        itemCount={submenus.length}
        onClick={setVisibleFalse}
      >
        {submenus.map((submenu, index) => (
          <HoverableSubmenuItem key={index} submenu={submenu} />
        ))}
      </HoverableSubmenuWrapperStyled>
    </HoverableMenuItemStyled>
  );
}

function HoverableSubmenuItem({ submenu }) {
  return (
    <HoverableSubmenuItemStyled>
      <SubmenuItemCaption to={submenu.to} caption={submenu.caption} />
    </HoverableSubmenuItemStyled>
  );
}

export default HoverableMenuItem;
