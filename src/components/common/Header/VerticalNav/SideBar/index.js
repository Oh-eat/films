import React, { useState, useCallback } from "react";
import { MdClose } from "react-icons/md";
import { SideBarStyled, Closer, MenuWrapperStyled } from "./styles";
import Button from "../../../Button";
import sitemap from "../../../../../lib/sitemap";
import DropdownMenu from "./DropdownMenu";
import ButtonMenu from "./ButtonMenu";

function SideBar({ visible, setNavHidden }) {
  const [selected, setSelected] = useState(null);

  const handleMenuClick = useCallback(() => {
    setSelected(null);
    setNavHidden();
  }, [setNavHidden]);

  return (
    <SideBarStyled className={visible && "visible"}>
      <Closer>
        <Button variant="icon" onClick={handleMenuClick}>
          <MdClose size="2rem" />
        </Button>
      </Closer>
      <MenuWrapperStyled>
        {sitemap.map(({ caption, to, submenus }, index) =>
          submenus ? (
            <DropdownMenu
              key={index}
              index={index}
              selected={selected === index}
              submenus={submenus}
              caption={caption}
              setSelected={setSelected}
              handleMenuClick={handleMenuClick}
            />
          ) : (
            <ButtonMenu
              key={index}
              caption={caption}
              to={to}
              handleMenuClick={handleMenuClick}
            />
          )
        )}
      </MenuWrapperStyled>
    </SideBarStyled>
  );
}

export default SideBar;
