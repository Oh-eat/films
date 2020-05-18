import React, { useState, useCallback } from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import Image from "../../common/Image";
import { ImagesItemStyled } from "./styles";

function ImagesItem({ type, image, onClick }) {
  const [loaded, setLoaded] = useState(false);

  const onLoad = useCallback(() => {
    setLoaded(true);
  }, []);

  return (
    <ImagesItemStyled
      className={`click-action${loaded ? " loaded" : ""}`}
      onClick={() => onClick(image.file_path)}
      type={type}
    >
      <Image
        src={buildImageUrl(image.file_path, type === "backdrop" ? 500 : 300)}
        basis="width"
        onLoadCallback={onLoad}
      />
    </ImagesItemStyled>
  );
}

export default ImagesItem;
