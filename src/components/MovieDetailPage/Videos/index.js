import React from "react";
import { isEmpty } from "../../../lib/isEmpty";
import NoContent from "../NoContent";
import VideoPlayer from "./VideoPlayer";
import { VideosStyled } from "./styles";

function Videos({ videos }) {
  console.log(videos);
  return (
    <VideosStyled>
      <h2>비디오</h2>
      {isEmpty(videos) ? (
        <NoContent>등록된 비디오가 없습니다.</NoContent>
      ) : (
        <VideoPlayer videos={videos} />
      )}
    </VideosStyled>
  );
}

export default Videos;
