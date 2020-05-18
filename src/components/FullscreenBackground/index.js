import React, { useState, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setLoaded } from "../../reducers/background";
import { buildImageUrl } from "../../lib/TMDB_API";
import {
  FullscreenBackgroundStyled,
  BackgroundPlaceholderStyled,
} from "./styles";

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

  return (
    <>
      <BackgroundPlaceholder visible={!currentPath} />
      {currentPath && (
        <FullscreenBackgroundStyled
          className={`${currentBrightness} ${loaded && "loaded"}`}
          src={buildImageUrl(currentPath, "original")}
          onLoad={onLoad}
        />
      )}
    </>
  );
}

function BackgroundPlaceholder({ visible }) {
  const dispatch = useDispatch();

  useEffect(() => {
    if (visible) dispatch(setLoaded(true));
  }, [dispatch, visible]);

  return (
    <BackgroundPlaceholderStyled
      className={(visible ? "visible" : "") + " font-bold"}
    >
      films
    </BackgroundPlaceholderStyled>
  );
}

export default FullscreenBackground;
