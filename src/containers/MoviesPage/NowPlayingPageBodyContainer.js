import React from "react";
import MoviesPageBodyContainer from "./MoviesPageBodyContainer";

function NowPlayingPageBodyContainer({ currentPage }) {
  return (
    <MoviesPageBodyContainer type="nowPlaying" currentPage={currentPage} />
  );
}

export default NowPlayingPageBodyContainer;
