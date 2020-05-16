import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
// eslint-disable-next-line
import Image from "../../common/Image";
import { ImagesItemStyled } from "./styles";

function ImagesItem({ type, image, onClick }) {
  return (
    <ImagesItemStyled
      className="click-action"
      onClick={() => onClick(image.file_path)}
      type={type}
    >
      <img
        src={buildImageUrl(image.file_path, type === "backdrop" ? 400 : 300)}
        alt=""
      />
    </ImagesItemStyled>
  );
}

export default ImagesItem;
