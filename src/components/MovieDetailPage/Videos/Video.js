import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import { VideoStyled, PlayerWrapper } from "./styles";

function Video({ index, video, selected, stopPlaying }) {
  const playerRef = useRef(null);

  useEffect(() => {
    if ((index !== selected && playerRef.current) || stopPlaying) {
      const player = playerRef.current.getInternalPlayer();
      if (player && player.pauseVideo) {
        player.pauseVideo();
      }
    }
  }, [index, selected, stopPlaying]);

  return (
    <VideoStyled>
      <PlayerWrapper>
        <ReactPlayer
          ref={playerRef}
          className="react-player"
          url={`https://www.youtube.com/watch?v=${video.key}`}
          controls
          width="100%"
          height="100%"
        />
      </PlayerWrapper>
      <span>{video.name}</span>
    </VideoStyled>
  );
}

export default Video;
