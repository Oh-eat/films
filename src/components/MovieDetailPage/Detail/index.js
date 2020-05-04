import React from "react";
import { DetailStyled, InfoItemStyled } from "./styles";
import Title from "./Title";
import Poster from "./Poster";
import { buildImageUrl } from "../../../lib/TMDB_API";
import mapGenres from "../../../lib/GENRES";
import Buttons from "../Buttons";

function Detail({ detailKR, detailEN }) {
  return (
    <DetailStyled>
      <Title title={detailKR.title} originalTitle={detailKR.original_title} />
      <div>
        {mapGenres(detailKR.genres).map((genre) => (
          <span key={genre}>{genre} </span>
        ))}
      </div>
      <Buttons homepage={detailKR.homepage || detailEN.homepage} />
      <div className="info">
        <Poster posterPath={buildImageUrl(detailKR.poster_path, 500)} />
        <div className="left">
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
        </div>
      </div>
      <div>
        개요
        <em>{detailKR.tagline || detailEN.tagline}</em>
        <p>{detailKR.overview || detailEN.overview}</p>
      </div>
    </DetailStyled>
  );
}

function InfoItem({ caption, value }) {
  return (
    <InfoItemStyled>
      <div>
        <strong>{caption}</strong>
        <span>{value}</span>
      </div>
    </InfoItemStyled>
  );
}

export default Detail;
