import React from "react";
import Info from "./Info";
import Title from "./Title";
import Poster from "./Poster";
import Buttons from "./Buttons";
import mergeDetail from "../../lib/mergeDetail";
import Genres from "./Genres";
import Summary from "./Summary";
import { Wrapper } from "./styles";

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
      {/* <HorizontalDetail detail={detail} /> */}
      <Wrapper className="wrapper">
        <Poster posterPath={detail.poster_path} />
        <div className="info">
          <Title title={detail.title} originalTitle={detail.original_title} />
          <Buttons homepage={detail.homepage} />
        </div>
      </Wrapper>
      <Genres genres={detail.genres} />
      <Info detail={detail} />
      <Summary tagline={detail.tagline} overview={detail.overview} />
    </>
  );
}

export default MovieDetailPageBody;
