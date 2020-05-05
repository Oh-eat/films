import React from "react";
import { DetailStyled, InfoItemStyled } from "./styles";
import Title from "./Title";
import Poster from "./Poster";
import Buttons from "./Buttons";
import Genres from "./Genres";

function Detail({ detailKR, detailEN }) {
  console.log(detailKR, detailEN);
  return (
    <DetailStyled>
      <Title title={detailKR.title} originalTitle={detailKR.original_title} />
      <Genres genres={detailKR.genres} />
      <Buttons homepage={detailKR.homepage || detailEN.homepage} />
      <div className="info">
        <Poster posterPath={detailKR.poster_path || detailEN.poster_path} />
        <div className="left">
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상태" value={detailKR.status} />
          <InfoItem caption="평균 평점" value={detailKR.vote_average} />
          <InfoItem
            caption="국가"
            value={
              detailKR.production_countries.length > 0 &&
              detailKR.production_countries[0].name
            }
          />
        </div>
        {/* <div className="right">
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
          <InfoItem caption="상영 시간" value={`${detailKR.runtime}분`} />
        </div> */}
        <div className="summary">
          <h3>개요</h3>
          <br />
          <em>{detailKR.tagline || detailEN.tagline}</em>
          <p>{detailKR.overview || detailEN.overview}</p>
        </div>
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
