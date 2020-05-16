import React from "react";
import { PosterStyled } from "./styles";
import Image from "../../common/Image";
import { buildImageUrl } from "../../../lib/TMDB_API";

function Poster({ posterPath }) {
  return (
    <PosterStyled>
      <div className="basis-height">
        <Image src={buildImageUrl(posterPath, 500)} basis="height" />
      </div>
      <div className="basis-width">
        <Image src={buildImageUrl(posterPath, 500)} basis="width" />
      </div>
    </PosterStyled>
  );
}

export default Poster;
