import React, { useState, useCallback } from "react";
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { VideoPlayerStyled, OuterWrapper, InnerWrapper } from "./styles";
import Button from "../../common/Button";
import Video from "./Video";

function VideoPlayer({ videos, stopPlaying }) {
  const [selected, setSelected] = useState(0);

  const onPrevClick = useCallback(() => {
    setSelected((state) => (state - 1 >= 0 ? state - 1 : 0));
  }, []);
  const onNextClick = useCallback(() => {
    setSelected((state) =>
      state + 1 < videos.length ? state + 1 : videos.length - 1
    );
  }, [videos.length]);

  return (
    <VideoPlayerStyled id="video-player">
      {selected !== 0 && (
        <>
          <Button
            className="prev landscape"
            size="2rem"
            variant="transparent circle"
            onClick={onPrevClick}
          >
            <MdNavigateBefore size="2.5rem" />
          </Button>
          <Button
            className="prev portrait"
            width="auto"
            height="2rem"
            variant="transparent"
            onClick={onPrevClick}
          >
            <MdNavigateBefore size="2.5rem" />
          </Button>
        </>
      )}
      <OuterWrapper>
        <InnerWrapper
          videoCount={videos.length}
          translateX={`${(100 / videos.length) * selected}%`}
        >
          {videos.map(
            (video, index) =>
              video.site === "YouTube" && (
                <Video
                  key={index}
                  index={index}
                  video={video}
                  selected={selected}
                  stopPlaying={stopPlaying}
                />
              )
          )}
        </InnerWrapper>
      </OuterWrapper>
      {selected !== videos.length - 1 && (
        <>
          <Button
            className="next landscape"
            size="2rem"
            variant="transparent circle"
            onClick={onNextClick}
          >
            <MdNavigateNext size="2.5rem" />
          </Button>
          <Button
            className="next portrait"
            width="auto"
            height="2rem"
            variant="transparent"
            onClick={onNextClick}
          >
            <MdNavigateNext size="2.5rem" />
          </Button>
        </>
      )}
    </VideoPlayerStyled>
  );
}

export default VideoPlayer;
