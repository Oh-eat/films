import React, { useState, useCallback } from "react";
import { Link, withRouter } from "react-router-dom";
import { MenuStyled, SubmenuWrapperStyled, SubmenuStyled } from "./styles";

function HoverableMenu({ submenus, caption }) {
  const [visible, setVisible] = useState(false);

  const setVisibleTrue = useCallback(() => {
    setVisible(true);
  }, []);
  const setVisibleFalse = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <MenuStyled
      onMouseEnter={setVisibleTrue}
      onMouseLeave={setVisibleFalse}
      className={visible && "visible"}
    >
      <h2 className="caption">{caption}</h2>
      <SubmenuWrapperStyled
        className={visible && "visible"}
        itemCount={submenus.length}
        onClick={setVisibleFalse}
      >
        {submenus.map((submenu, index) => (
          <Submenu key={index} submenu={submenu} />
        ))}
      </SubmenuWrapperStyled>
    </MenuStyled>
  );
}

function Submenu({ submenu }) {
  return (
    <SubmenuStyled>
      <Link to={submenu.to}>{submenu.caption}</Link>
    </SubmenuStyled>
  );
}

export default HoverableMenu;
