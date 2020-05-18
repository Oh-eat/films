import React, { useState, useCallback, useEffect } from "react";
import { withRouter } from "react-router-dom";
import { MdClose } from "react-icons/md";
import sitemap from "../../../../lib/sitemap";
import Button from "../../../common/Button";
import DropdownNavItem from "./DropdownNavItem";
import ButtonNavItem from "./ButtonNavItem";
import {
  SideBarStyled,
  Closer,
  VerticalNavItemWrapper,
  Fullscreen,
} from "./styles";

function SideBar({ visible, setVisibleFalse, location }) {
  const [selected, setSelected] = useState(null);

  const onClick = useCallback((index) => {
    setSelected((state) => (state === index ? null : index));
  }, []);
  const hideVerticalNav = useCallback(() => {
    setSelected(null);
    setVisibleFalse();
  }, [setVisibleFalse]);

  useEffect(() => {
    hideVerticalNav();
  }, [location, hideVerticalNav]);

  return (
    <>
      <Fullscreen
        className={visible ? "visible" : ""}
        onClick={hideVerticalNav}
      />
      <SideBarStyled className={visible ? "visible" : ""}>
        <Closer>
          <Button
            variant="transparent circle"
            size="1.75rem"
            onClick={hideVerticalNav}
          >
            <MdClose size="2rem" />
          </Button>
        </Closer>
        <VerticalNavItemWrapper>
          {sitemap.map(({ caption, to, subnavs }, index) =>
            subnavs ? (
              <DropdownNavItem
                key={index}
                selected={selected === index}
                subnavs={subnavs}
                caption={caption}
                onClick={() => onClick(index)}
              />
            ) : (
              <ButtonNavItem key={index} caption={caption} to={to} />
            )
          )}
        </VerticalNavItemWrapper>
      </SideBarStyled>
    </>
  );
}

export default withRouter(SideBar);
