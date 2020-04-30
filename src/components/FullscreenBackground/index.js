import React, { useState, useCallback, useEffect } from "react";
import { useSelector } from "react-redux";
import { FullscreenBackgroundStyled } from "./styles";
import { buildImageUrl } from "../../lib/TMDB_API";

function FullscreenBackground() {
  const [loaded, setLoaded] = useState(false);
  const [currentPath, setCurrentPath] = useState(null);
  const [currentBrightness, setCurrentBrightness] = useState(null);
  const { path, brightness = "dark" } = useSelector(
    ({ background }) => background
  );

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!currentPath) {
      setCurrentPath(path);
      setCurrentBrightness(brightness);
      return;
    }
    if (path === currentPath) {
      setCurrentBrightness(brightness);
      return;
    }
    setLoaded(false);
    setTimeout(() => {
      setCurrentPath(path);
      setCurrentBrightness(brightness);
    }, 250);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, brightness]);

  if (!path) return null;

  return (
    <FullscreenBackgroundStyled
      className={`${currentBrightness} ${loaded && "loaded"}`}
      src={buildImageUrl(currentPath, "original")}
      onLoad={onLoad}
    />
  );
}

export default FullscreenBackground;
