import React from "react";
import { VerticalSubnavItemCaptionStyled } from "./styles";
import { Link } from "react-router-dom";

function SubnavItemCaption({ caption, to }) {
  return (
    <VerticalSubnavItemCaptionStyled>
      <Link to={to}>{caption}</Link>
    </VerticalSubnavItemCaptionStyled>
  );
}

export default SubnavItemCaption;
