import React, { useEffect, useCallback, useState } from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import Image from "../../common/Image";
import { PosterStyled } from "./styles";

function getBasis() {
  return window.matchMedia("(orientation: portrait)").matches &&
    !(
      document.documentElement.clientWidth >= 768 &&
      document.documentElement.clientHeight >= 768
    )
    ? "width"
    : "height";
}

function Poster({ posterPath }) {
  const [basis, setBasis] = useState("height");

  const onResize = useCallback(() => {
    setBasis(getBasis());
  }, []);

  useEffect(() => {
    setBasis(getBasis());
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return (
    posterPath && (
      <PosterStyled>
        <Image
          objectFit="contain"
          basis={basis}
          src={buildImageUrl(posterPath, 1280)}
        />
      </PosterStyled>
    )
  );
}

export default Poster;
