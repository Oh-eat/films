import styled from "styled-components";
import { SectionStyle } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";

export const VideosStyled = styled(SectionStyle)``;

export const VideoPlayerStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto min(100%, 640px) auto;
  grid-template-areas: "prev video next";
  grid-gap: 0 ${DEFAULT_HORIZONTAL_MARGIN};
  align-items: center;

  .prev {
    grid-area: prev;
  }

  .next {
    grid-area: next;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 50% 50%;
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN} 0;
    grid-template-areas:
      "video video"
      "prev next";
  }
`;

export const OuterWrapper = styled.div`
  grid-area: video;
  width: 100%;
  overflow: hidden;
`;

export const InnerWrapper = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.videoCount}, 1fr)`};
  width: ${(props) => `${props.videoCount * 100}%`};
  transform: ${(props) => `translateX(-${props.translateX})`};
  transition: transform 0.3s ease;
`;

export const VideoStyled = styled.div`
  position: relative;
  width: 100%;
  /* padding-top: ${(props) => props.paddingTop}; */
  padding-top:56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }

  span{
      text-align:center;
  }
`;
