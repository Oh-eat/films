import React, { useState, useCallback } from "react";
import { MdMenu } from "react-icons/md";
import { Fullscreen } from "./styles";
import SideBar from "./SideBar";
import Button from "../../Button";

function VerticalNav() {
  const [visible, setVisible] = useState(false);

  const setVisibleTrue = useCallback(() => {
    setVisible(true);
  }, []);
  const setVisibleFalse = useCallback(() => {
    setVisible(false);
  }, []);

  return (
    <nav>
      <Button variant="icon" icon onClick={setVisibleTrue}>
        <MdMenu size="2rem" />
      </Button>
      <Fullscreen className={visible && "visible"} onClick={setVisibleFalse} />
      <SideBar visible={visible} setNavHidden={setVisibleFalse} />
    </nav>
  );
}

export default VerticalNav;
