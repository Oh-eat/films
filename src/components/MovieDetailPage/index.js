import React from "react";
import Info from "./Info";
import Title from "./Title";
import Poster from "./Poster";
import MovieDetailButtonsContainer from "../../containers/MovieDetailPage/MovieDetailButtonsContainer";
import mergeDetail from "../../lib/mergeDetail";
import Summary from "./Summary";
import { Wrapper } from "./styles";
import Credit from "./Credit";
import Images from "./Images";
import Similars from "./Similars";
import Videos from "./Videos";
import AlternativeMovieDetailPageBody from "../AlternativeMovieDetailPage";

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
      <AlternativeMovieDetailPageBody
        detailKR={detailKR}
        detailEN={detailEN}
        images={images}
        videos={videos}
        credit={credit}
        similars={similars}
      />
      <Wrapper>
        <Poster posterPath={detail.poster_path} />
        <div className="header">
          <Title
            title={detail.title}
            originalTitle={detail.original_title}
            year={new Date(detail.release_date).getFullYear()}
          />
          <MovieDetailButtonsContainer
            homepage={detail.homepage}
            movie={detail}
          />
        </div>
      </Wrapper>
      <Info detail={detail} />
      <Summary tagline={detail.tagline} overview={detail.overview} />
      <Credit credit={credit} />
      <Images images={images} />
      <Videos videos={videos} />
      <Similars similars={similars} />
    </>
  );
}

export default MovieDetailPageBody;
