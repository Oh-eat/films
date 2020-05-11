import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
// eslint-disable-next-line
import Image from "../../common/Image";
import { ImagesSlideStyled } from "./styles";

function ImagesSlide({ type, image, onClick }) {
  return (
    <ImagesSlideStyled
      className="swiper-slide click-action"
      onClick={() => onClick(image.file_path)}
      type={type}
    >
      <img
        src={buildImageUrl(image.file_path, type === "backdrop" ? 400 : 300)}
        alt=""
      />
    </ImagesSlideStyled>
  );
}

export default ImagesSlide;
