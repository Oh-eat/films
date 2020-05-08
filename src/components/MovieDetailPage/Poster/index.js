import React, { useEffect, useCallback, useState, useRef } from "react";
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
  // const timerRef = useRef(null);

  const onResize = useCallback(() => {
    // clearTimeout(timerRef.current);
    // timerRef.current = setTimeout(() => {
    setBasis(getBasis());
    // timerRef.current = null;
    // }, 100);
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
          src={buildImageUrl(posterPath, "original")}
        />
      </PosterStyled>
    )
  );
}

export default Poster;
