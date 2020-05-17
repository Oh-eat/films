import styled from "styled-components";
import { SectionStyled } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";

export const VideosStyled = styled(SectionStyled)`
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const VideoPlayerStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr min(60%, 640px) 1fr;
  grid-template-areas: "prev video next";
  grid-gap: 0 ${DEFAULT_HORIZONTAL_MARGIN};
  align-items: center;
  width: 100%;

  .prev {
    grid-area: prev;

    &.landscape {
      justify-self: flex-end;
    }
  }

  .next {
    grid-area: next;

    &.landscape {
      justify-self: flex-start;
    }
  }

  .portrait {
    display: none;
  }

  @media screen and (orientation: portrait) and (max-width: 767px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN} 0;
    grid-template-areas:
      "video video"
      "prev next";

    .landscape {
      display: none;
    }

    .portrait {
      display: block;
    }
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
    font-weight: 300;
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
