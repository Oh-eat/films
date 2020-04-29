import React from "react";
import { VerticalSubmenuItemCaptionStyled } from "./styles";
import { Link } from "react-router-dom";

function SubmenuItemCaption({ caption, to }) {
  return (
    <VerticalSubmenuItemCaptionStyled>
      <Link to={to}>{caption}</Link>
    </VerticalSubmenuItemCaptionStyled>
  );
}

export default SubmenuItemCaption;
