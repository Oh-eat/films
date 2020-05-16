import React from "react";
import { MdLabel, MdAccessTime, MdMovie, MdStar, MdFlag } from "react-icons/md";
import { InfoStyled, InfoItemStyled } from "./styles";
import mapCountries from "../../../lib/ISO_3166_1";
import mapGenres from "../../../lib/GENRES";
import { isEmpty } from "../../../lib/isEmpty";

const statusMap = {
  "In Production": "제작",
  "Post Production": "후반 제작",
  Released: "개봉",
  Planned: "기획",
};

function Info({ detail }) {
  return (
    <InfoStyled>
      <Genres genres={detail.genres} />
      <Runtime runtime={detail.runtime} />
      <Status status={detail.status} />
      <VoteAverage
        voteAverage={detail.vote_average}
        voteCount={detail.vote_count}
      />
      <ProductionCountries productionCountries={detail.production_countries} />
    </InfoStyled>
  );
}

function Genres({ genres }) {
  return (
    <InfoItemStyled>
      <MdLabel size="1.5rem" />
      {isEmpty(genres) ? (
        <span>-</span>
      ) : (
        mapGenres(genres).map((genre) => <span key={genre}>{genre}</span>)
      )}
    </InfoItemStyled>
  );
}

function Runtime({ runtime }) {
  return (
    <InfoItemStyled>
      {/* <strong>상영 시간</strong> */}
      <MdAccessTime size="1.5rem" />
      <span>{isEmpty(runtime) ? "-" : `${runtime}분`}</span>
    </InfoItemStyled>
  );
}

function Status({ status }) {
  return (
    <InfoItemStyled>
      {/* <strong>상태</strong> */}
      <MdMovie size="1.5rem" />
      <span>{isEmpty(status) ? "-" : statusMap[status] || status}</span>
    </InfoItemStyled>
  );
}
function VoteAverage({ voteAverage, voteCount }) {
  return (
    <InfoItemStyled>
      {/* <strong>평균 평점</strong> */}
      <MdStar size="1.5rem" />
      <span>{isEmpty(voteCount) ? "-" : voteAverage}</span>
    </InfoItemStyled>
  );
}

function ProductionCountries({ productionCountries }) {
  return (
    <InfoItemStyled>
      {/* <strong>제작 국가</strong> */}
      <MdFlag size="1.5rem" />
      {isEmpty(productionCountries) ? (
        <span>-</span>
      ) : (
        mapCountries(productionCountries).map((country) => (
          <span key={country}>{country} </span>
        ))
      )}
    </InfoItemStyled>
  );
}

export default Info;
