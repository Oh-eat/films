import React, { useState, useCallback } from "react";
import { MdClose } from "react-icons/md";
import sitemap from "../../../../lib/sitemap";
import {
  SideBarStyled,
  Closer,
  VerticalNavItemWrapper,
  Fullscreen,
} from "./styles";
import Button from "../../../common/Button";
import DropdownMenu from "./DropdownNavItem";
import ButtonNavItem from "./ButtonNavItem";

function SideBar({ visible, setNavHidden }) {
  const [selected, setSelected] = useState(null);

  const handleMenuClick = useCallback(() => {
    setSelected(null);
    setNavHidden();
  }, [setNavHidden]);

  return (
    <>
      <Fullscreen
        className={visible && "visible"}
        onClick={handleMenuClick}
        onScroll={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      />
      <SideBarStyled className={visible && "visible"}>
        <Closer>
          <Button
            variant="transparent circle"
            size="1.75rem"
            onClick={handleMenuClick}
          >
            <MdClose size="2rem" />
          </Button>
        </Closer>
        <VerticalNavItemWrapper>
          {sitemap.map(({ caption, to, subnavs }, index) =>
            subnavs ? (
              <DropdownMenu
                key={index}
                index={index}
                selected={selected === index}
                subnavs={subnavs}
                caption={caption}
                setSelected={setSelected}
                handleMenuClick={handleMenuClick}
              />
            ) : (
              <ButtonNavItem
                key={index}
                caption={caption}
                to={to}
                handleMenuClick={handleMenuClick}
              />
            )
          )}
        </VerticalNavItemWrapper>
      </SideBarStyled>
    </>
  );
}

export default SideBar;
