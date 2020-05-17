import React from "react";
import { SimilarsStyled } from "./styles";
import SimilarItem from "./SimilarItem";
import { useState } from "react";
import { useEffect } from "react";

function Similars({ similars, state }) {
  const [render, setRender] = useState(false);

  useEffect(() => {
    if (!render && state !== "hidden") {
      setRender(true);
    }
  }, [state, render]);

  if (!render) return null;

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
