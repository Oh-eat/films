import React, { useCallback, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { MdKeyboardArrowDown } from "react-icons/md";
import { PostersStyled, BackdropsStyled } from "./styles";
import ImagesItem from "./ImagesItem";
import { showZoom } from "../../../reducers/zoom";
import Button from "../../common/Button";

function Images({ type, images, state }) {
  const dispatch = useDispatch();
  const [render, setRender] = useState(false);
  const [partialItems, setPartialItems] = useState(
    images.slice(0, type === "poster" ? 10 : 6)
  );
  const Container = type === "poster" ? PostersStyled : BackdropsStyled;

  useEffect(() => {
    if (!render && state !== "hidden") {
      setRender(true);
    }
  }, [state, render]);

  const onImageClick = useCallback(
    (path) => {
      dispatch(showZoom(path));
    },
    [dispatch]
  );
  const onLoadMoreClicK = useCallback(() => {
    if (partialItems.length < images.length) {
      const nextPartialItems = images.slice(
        0,
        partialItems.length + (type === "poster" ? 10 : 6)
      );
      setPartialItems(nextPartialItems);
    }
  }, [type, images, partialItems]);

  if (!render) return null;

  return (
    <Container className={state}>
      <div className="content-wrapper">
        {partialItems.map((image, index) => (
          <ImagesItem
            key={index}
            type={type}
            image={image}
            onClick={onImageClick}
          />
        ))}
        {images.length > partialItems.length && (
          <Button
            variant="transparent"
            height="2.5rem"
            onClick={onLoadMoreClicK}
          >
            <MdKeyboardArrowDown size="2rem" />
          </Button>
        )}
      </div>
    </Container>
  );
}

export function Posters({ posters, state }) {
  return <Images type="poster" images={posters} state={state} />;
}

export function Backdrops({ backdrops, state }) {
  return <Images type="backdrop" images={backdrops} state={state} />;
}
