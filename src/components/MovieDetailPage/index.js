import React from "react";
import Detail from "./Detail";
import Credit from "./Credit";
import Images from "./Images";
import Videos from "./Videos";
import Similars from "./Similars";
import Button from "../common/Button";

function MovieDetailPageBody({
  detailKR,
  detailEN,
  images,
  videos,
  credit,
  similars,
}) {
  return (
    <>
      <Button to="/movie/443791">UNDERWATER</Button>
      <Detail detailKR={detailKR} detailEN={detailEN} />
      <Credit credit={credit} />
      <Images images={images} />
      <Videos videos={videos} />
      <Similars similars={similars} />
    </>
  );
}

export default MovieDetailPageBody;
