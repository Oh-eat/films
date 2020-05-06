import React from "react";
import Info from "./Info";
import Title from "./Title";
import Poster from "./Poster";
import Buttons from "./Buttons";
import mergeDetail from "../../lib/mergeDetail";
import Genres from "./Genres";
import Summary from "./Summary";

function MovieDetailPageBody({
  detailKR,
  detailEN,
  images,
  videos,
  credit,
  similars,
}) {
  const detail = mergeDetail(detailKR, detailEN);
  console.log(detail);
  return (
    <>
      <Title title={detail.title} originalTitle={detail.original_title} />
      <Genres genres={detail.genres} />
      <Buttons homepage={detail.homepage} />
      <Poster posterPath={detail.poster_path} />
      <Info detail={detail} />
      <Summary tagline={detail.tagline} overview={detail.overview} />
    </>
  );
}

export default MovieDetailPageBody;
