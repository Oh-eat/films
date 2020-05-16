import React from "react";
import VideoPlayer from "./VideoPlayer";
import { VideosStyled } from "./styles";

function Videos({ videos, state, stopPlaying }) {
  return (
    <VideosStyled className={state}>
      <div className="content-wrapper">
        <VideoPlayer videos={videos} stopPlaying={stopPlaying} />
      </div>
    </VideosStyled>
  );
}

export default Videos;
