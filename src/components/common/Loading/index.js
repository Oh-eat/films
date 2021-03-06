import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { LoadingStyled } from "./styles";

function Loading({ loaded }) {
  return (
    <LoadingStyled className={loaded ? "loadead" : ""}>
      <AiOutlineLoading3Quarters size="2.5rem" />
    </LoadingStyled>
  );
}

export default Loading;
