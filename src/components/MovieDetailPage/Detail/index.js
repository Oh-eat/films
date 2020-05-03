import React from "react";
import { DetailStyled } from "./styles";
import Title from "./Title";
import Poster from "./Poster";
import { buildImageUrl } from "../../../lib/TMDB_API";

function Detail({ detail }) {
  return (
    <DetailStyled>
      <Title title={detail.title} originalTitle={detail.original_title} />
      <Poster posterPath={buildImageUrl(detail.poster_path, 500)} />
    </DetailStyled>
  );
}

export default Detail;
