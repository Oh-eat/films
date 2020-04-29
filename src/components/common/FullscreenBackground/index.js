import React, { useState, useCallback } from "react";
import { FullscreenBackgroundStyled } from "./styles";

function FullscreenBackground({ imagePath }) {
  const [loadead, setLoadead] = useState(false);

  const onLoad = useCallback(() => {
    setLoadead(true);
  }, []);

  return (
    <FullscreenBackgroundStyled
      className={loadead && "loaded"}
      src={imagePath}
      onLoad={onLoad}
    />
  );
}

export default FullscreenBackground;
