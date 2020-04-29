import React, { useState, useCallback } from "react";
import { MdMenu } from "react-icons/md";
import SideBar from "./SideBar";
import Button from "../../Button";
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
        <Button variant="icon" icon onClick={setVisibleTrue}>
          <MdMenu size="2rem" />
        </Button>
      </VerticalNavButtonsStyled>
      <SideBar visible={visible} setNavHidden={setVisibleFalse} />
    </VerticalNavStyled>
  );
}

export default VerticalNav;
