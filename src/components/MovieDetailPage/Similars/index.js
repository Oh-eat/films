import React from "react";
import SimilarsSwiper from "./SimilarsSwiper";
import { SimilarsStyled } from "./styles";
import { isEmpty } from "../../../lib/isEmpty";
import NoContent from "../NoContent";

function Similars({ similars }) {
  return (
    <SimilarsStyled>
      <h2>비슷한 영화</h2>
      {isEmpty(similars) ? (
        <NoContent>비슷한 영화가 없습니다.</NoContent>
      ) : (
        <SimilarsSwiper similars={similars} />
      )}
    </SimilarsStyled>
  );
}

export default Similars;
