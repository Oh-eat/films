import React, { useState, useCallback } from "react";
import mergeDetail from "../../lib/mergeDetail";
import MovieDetailNav from "./MovieDetailNav";

function AlternativeMovieDetailPageBody({
  detailKR,
  detailEN,
  images,
  videos,
  credit,
  similars,
}) {
  const detail = mergeDetail(detailKR, detailEN);
  const [selected, setSelected] = useState(null);

  const onClick = useCallback((index) => {
    setSelected(index);
  }, []);

  return (
    <>
      <MovieDetailNav
        detail={detail}
        images={images}
        videos={videos}
        credit={credit}
        similars={similars}
        onClick={onClick}
        selected={selected}
      />
    </>
  );
}

export default AlternativeMovieDetailPageBody;
