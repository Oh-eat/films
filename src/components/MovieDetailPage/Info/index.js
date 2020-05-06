import React from "react";
import { MdAccessTime, MdMovie, MdStar, MdFlag } from "react-icons/md";
import { InfoStyled, InfoItemStyled } from "./styles";
import mapCountries from "../../../lib/ISO_3166_1";

const statusMap = {
  "In Production": "제작",
  "Post Production": "후반 제작",
  Released: "개봉",
};

function Info({ detail }) {
  return (
    <InfoStyled>
      <Runtime runtime={detail.runtime} />
      <Status status={detail.status} />
      <VoteAverage voteAverage={detail.vote_average} />
      <ProductionCountries productionCountries={detail.production_countries} />
    </InfoStyled>
  );
}

function Runtime({ runtime }) {
  return (
    <InfoItemStyled>
      {/* <strong>상영 시간</strong> */}
      <MdAccessTime size="2rem" />
      <span>
        {!runtime || runtime === "0" || runtime === 0 ? "미정" : `${runtime}분`}
      </span>
    </InfoItemStyled>
  );
}

function Status({ status }) {
  return (
    <InfoItemStyled>
      {/* <strong>상태</strong> */}
      <MdMovie size="2rem" />
      <span>{statusMap[status] || status}</span>
    </InfoItemStyled>
  );
}
function VoteAverage({ voteAverage }) {
  return (
    <InfoItemStyled>
      {/* <strong>평균 평점</strong> */}
      <MdStar size="2rem" />
      <span>{voteAverage}</span>
    </InfoItemStyled>
  );
}

function ProductionCountries({ productionCountries }) {
  return (
    <InfoItemStyled>
      {/* <strong>제작 국가</strong> */}
      <MdFlag size="2rem" />
      {mapCountries(productionCountries).map((country) => (
        <span key={country}>{country} </span>
      ))}
    </InfoItemStyled>
  );
}

export default Info;
