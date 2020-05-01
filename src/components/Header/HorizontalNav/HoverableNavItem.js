import React, { useState, useCallback } from "react";
import {
  HoverableNavItemStyled,
  HoverableSubnavItemWrapper,
  HoverableSubnavItemStyled,
} from "./styles";
import NavItemCaption from "./NavItemCaption";
import SubnavItemCaption from "./SubnavItemCaption";

function HoverableNavItem({ subnavs, caption }) {
  const [visible, setVisible] = useState(false);

  const setVisibleTrue = useCallback(() => {
    setVisible(true);
  }, []);
  const setVisibleFalse = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <HoverableNavItemStyled
      onMouseEnter={setVisibleTrue}
      onMouseLeave={setVisibleFalse}
    >
      <NavItemCaption caption={caption} />
      <HoverableSubnavItemWrapper
        className={visible && "visible"}
        itemCount={subnavs.length}
        onClick={setVisibleFalse}
      >
        {subnavs.map((Subnav, index) => (
          <HoverableSubnavItem key={index} Subnav={Subnav} />
        ))}
      </HoverableSubnavItemWrapper>
    </HoverableNavItemStyled>
  );
}

function HoverableSubnavItem({ Subnav }) {
  return (
    <HoverableSubnavItemStyled>
      <SubnavItemCaption to={Subnav.to} caption={Subnav.caption} />
    </HoverableSubnavItemStyled>
  );
}

export default HoverableNavItem;
