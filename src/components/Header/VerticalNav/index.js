import React, { useState, useCallback } from "react";
import { MdMenu } from "react-icons/md";
import SideBar from "./SideBar";
import Button from "../../common/Button";
import SearchButton from "../../Search/SearchButton";
import { VerticalNavStyled, VerticalNavButtonsStyled } from "./styles";

function VerticalNav() {
  const [visible, setVisible] = useState(false);

  const setVisibleTrue = useCallback(() => {
    setVisible(true);
  }, []);
  const setVisibleFalse = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <VerticalNavStyled>
      <VerticalNavButtonsStyled>
        <SearchButton />
        <Button
          variant="transparent circle"
          size="1.75rem"
          onClick={setVisibleTrue}
        >
          <MdMenu size="2rem" />
        </Button>
      </VerticalNavButtonsStyled>
      <SideBar visible={visible} setVisibleFalse={setVisibleFalse} />
    </VerticalNavStyled>
  );
}

export default VerticalNav;
