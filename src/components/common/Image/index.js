import React, { useState, useCallback } from "react";
import { Wrapper } from "./styles";
import Loading from "../Loading";

function Image({ src, alt = "", objectFit, basis }) {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <Wrapper objectFit={objectFit} basis={basis}>
      {!loaded && <Loading loaded={loaded} />}
      <img
        className={loaded ? "loaded" : ""}
        src={src}
        alt={alt}
        onLoad={onLoad}
      />
    </Wrapper>
  );
}

export default Image;
