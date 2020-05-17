import React, { useState, useCallback, useEffect } from "react";
import { Wrapper } from "./styles";
import Loading from "../Loading";

function Image({ src, alt = "", objectFit, basis, onLoadCallback }) {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!onLoadCallback || !loaded) return;
    onLoadCallback();
  }, [loaded, onLoadCallback]);

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
