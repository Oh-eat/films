import React from "react";
import { SimilarsStyled } from "./styles";
import SimilarItem from "./SimilarItem";

function Similars({ similars, state }) {
  return (
    <SimilarsStyled className={state}>
      <div className="content-wrapper">
        {similars.map((similar, index) => (
          <SimilarItem key={index} similar={similar} />
        ))}
      </div>
    </SimilarsStyled>
  );
}

export default Similars;
