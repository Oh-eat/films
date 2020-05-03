import React from "react";
import Image from "../../common/Image";
import { PosterStyled } from "./styles";

function Poster({ posterPath }) {
  return (
    <PosterStyled>
      <Image src={posterPath} />
    </PosterStyled>
  );
}

export default Poster;
