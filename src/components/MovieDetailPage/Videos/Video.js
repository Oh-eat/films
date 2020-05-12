import React from "react";
import ReactPlayer from "react-player";
import { VideoStyled } from "./styles";

function Video({ index, width, video, selected }) {
  return (
    <VideoStyled width={width}>
      <ReactPlayer
        className="react-player"
        url={`https://www.youtube.com/watch?v=${video.key}`}
        controls
        light
        width="100%"
        height="100%"
      />
      {/* <span>{video.name}</span> */}
    </VideoStyled>
  );
}

export default Video;
