import React from "react";
import Detail from "./Detail";
import Credit from "./Credit";
import Images from "./Images";
import Videos from "./Videos";
import Similars from "./Similars";

function MovieDetailPageBody({ detail, images, videos, credit, similars }) {
  console.log(detail, images, videos, credit, similars);
  return (
    <>
      <Detail detail={detail} />
      <Credit credit={credit} />
      <Images images={images} />
      <Videos videos={videos} />
      <Similars similars={similars} />
    </>
  );
}

export default MovieDetailPageBody;
