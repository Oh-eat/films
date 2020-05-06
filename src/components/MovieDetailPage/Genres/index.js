import React from "react";
import { GenreTagStyled, Wrapper } from "./styles";
import mapGenres from "../../../lib/GENRES";

function Genres({ genres }) {
  return (
    <Wrapper>
      {mapGenres(genres).map((genre) => (
        <GenreTag key={genre} genre={genre} />
      ))}
    </Wrapper>
  );
}

function GenreTag({ genre }) {
  return <GenreTagStyled>{genre}</GenreTagStyled>;
}

export default Genres;
