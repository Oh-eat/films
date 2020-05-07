import React from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import mapGenres from "../../../lib/GENRES";
import {
  Detail,
  Wrapper,
  Poster,
  Title,
  GenreTag,
  Genres,
  Summary,
} from "./styles";
import Image from "../../common/Image";
import Buttons from "../Buttons";

function HorizontalDetail({ detail }) {
  return (
    <Wrapper>
      {detail.poster_path && (
        <Poster>
          <Image
            basis="height"
            src={buildImageUrl(detail.poster_path, "original")}
          />
        </Poster>
      )}
      <Detail>
        <h2>{detail.original_title}</h2>
        <Title>
          <h1>{detail.title}</h1>
          <span>({new Date(detail.release_date).getFullYear()})</span>
        </Title>
        <Genres>
          {mapGenres(detail.genres).map((genre) => (
            <GenreTag key={genre}>{genre}</GenreTag>
          ))}
        </Genres>
        <Summary>
          <em>{detail.tagline}</em>
          <p>{detail.overview}</p>
        </Summary>
      </Detail>
      <Buttons />
    </Wrapper>
  );
}

export default HorizontalDetail;
