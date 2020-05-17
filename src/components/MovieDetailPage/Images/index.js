import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { PostersStyled, BackdropsStyled } from "./styles";
import ImagesItem from "./ImagesItem";
import { showZoom } from "../../../reducers/zoom";

export function Posters({ posters, state }) {
  const dispatch = useDispatch();

  const onClick = useCallback(
    (path) => {
      dispatch(showZoom(path));
    },
    [dispatch]
  );

  return (
    <PostersStyled className={state}>
      <div className="content-wrapper">
        {posters.map((poster, index) => (
          <ImagesItem
            key={index}
            type="poster"
            image={poster}
            onClick={onClick}
          />
        ))}
      </div>
    </PostersStyled>
  );
}

export function Backdrops({ backdrops, state }) {
  const dispatch = useDispatch();

  const onClick = useCallback(
    (path) => {
      dispatch(showZoom(path));
    },
    [dispatch]
  );

  return (
    <BackdropsStyled className={state}>
      <div className="content-wrapper">
        {backdrops.map((backdrop, index) => (
          <ImagesItem
            key={index}
            type="backdrop"
            image={backdrop}
            onClick={onClick}
          />
        ))}
      </div>
    </BackdropsStyled>
  );
}
