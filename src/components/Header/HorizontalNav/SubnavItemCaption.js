import React from "react";
import { HorizontalSubnavItemCaptionStyled } from "./styles";
import { Link } from "react-router-dom";

function SubnavItemCaption({ caption, to }) {
  return (
    <HorizontalSubnavItemCaptionStyled>
      <Link to={to}>{caption}</Link>
    </HorizontalSubnavItemCaptionStyled>
  );
}

export default SubnavItemCaption;
