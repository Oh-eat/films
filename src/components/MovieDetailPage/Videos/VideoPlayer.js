import React, { useState, useCallback } from "react";
import { VideoPlayerStyled, OuterWrapper, InnerWrapper } from "./styles";
import Button from "../../common/Button";
import Video from "./Video";

function VideoPlayer({ videos }) {
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
    <VideoPlayerStyled>
      <Button className="prev" variant="outlined" onClick={onPrevClick}>
        ◀
      </Button>
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
                />
              )
          )}
        </InnerWrapper>
      </OuterWrapper>
      <Button className="next" variant="outlined" onClick={onNextClick}>
        ▶
      </Button>
    </VideoPlayerStyled>
  );
}

export default VideoPlayer;
