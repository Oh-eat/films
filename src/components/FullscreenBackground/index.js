import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FullscreenBackgroundStyled } from "./styles";
import { buildImageUrl } from "../../lib/TMDB_API";
import { setLoaded } from "../../reducers/background";

function FullscreenBackground() {
  const dispatch = useDispatch();
  const [currentPath, setCurrentPath] = useState(null);
  const [currentBrightness, setCurrentBrightness] = useState(null);
  const { path, brightness = "dark", loaded } = useSelector(
    ({ background }) => background
  );

  const onLoad = useCallback(() => {
    dispatch(setLoaded(true));
  }, [dispatch]);

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
    setTimeout(() => {
      setCurrentPath(path);
      setCurrentBrightness(brightness);
    }, 250);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [path, brightness]);

  if (!currentPath) return null;

  console.log(loaded);
  return (
    <FullscreenBackgroundStyled
      className={`${currentBrightness} ${loaded && "loaded"}`}
      src={currentPath ? buildImageUrl(currentPath, "original") : ""}
      onLoad={onLoad}
    />
  );
}

export default FullscreenBackground;
