import React from "react";
import Info from "./Info";
import Title from "./Title";
import Poster from "./Poster";
import Buttons from "./Buttons";
import mergeDetail from "../../lib/mergeDetail";
import Summary from "./Summary";
import { Wrapper } from "./styles";
import Credit from "./Credit";
import Images from "./Images";
import Similars from "./Similars";

function MovieDetailPageBody({
  detailKR,
  detailEN,
  images,
  videos,
  credit,
  similars,
}) {
  const detail = mergeDetail(detailKR, detailEN);
  return (
    <>
      <Wrapper>
        <Poster posterPath={detail.poster_path} />
        <div className="header">
          <Title
            title={detail.title}
            originalTitle={detail.original_title}
            year={new Date(detail.release_date).getFullYear()}
          />
          <Buttons homepage={detail.homepage} />
        </div>
      </Wrapper>
      <Info detail={detail} />
      <Summary tagline={detail.tagline} overview={detail.overview} />
      <Credit credit={credit} />
      <Images images={images} />
      <Similars similars={similars} />
    </>
  );
}

export default MovieDetailPageBody;
