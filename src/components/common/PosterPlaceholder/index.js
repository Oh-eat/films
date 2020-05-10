import React from "react";
import { MdLocalMovies } from "react-icons/md";
import { PosterPlaceholderStyled } from "./styles";

function PosterPlaceholder({ title }) {
  return (
    <PosterPlaceholderStyled>
      <span>{title}</span>
      <MdLocalMovies size="75%" />
    </PosterPlaceholderStyled>
  );
}

export default PosterPlaceholder;
