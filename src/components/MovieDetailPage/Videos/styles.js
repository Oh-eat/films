import styled from "styled-components";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";
import { SectionStyled } from "../styles";

export const VideosStyled = styled(SectionStyled)`
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const VideoPlayerStyled = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: ${DEFAULT_HORIZONTAL_MARGIN} 0;
  grid-template-areas:
    "video video"
    "prev next";

  .prev {
    grid-area: prev;

    &.low-height {
      justify-self: flex-end;
    }
  }

  .next {
    grid-area: next;

    &.low-height {
      justify-self: flex-start;
    }
  }

  .low-height {
    display: none;
  }

  .default {
    display: block;
  }

  @media screen and (orientation: landscape) and (max-height: 767px) {
    grid-template-columns: 1fr 50% 1fr;
    grid-template-areas: "prev video next";
    grid-gap: 0 ${DEFAULT_HORIZONTAL_MARGIN};
    align-items: center;

    .low-height {
      display: block;
    }

    .default {
      display: none;
    }
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    width: min(80%, 1024px);
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
  width: 100%;
  position: relative;
  text-align: center;

  span {
    display: inline-block;
    margin-top: 0.5rem;
    font-size: 0.9rem;
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    span {
      max-width: 90%;
      font-size: 1.1rem;
      margin-top: 1rem;
    }
  }
`;

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;
