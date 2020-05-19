import styled from "styled-components";
import {
  HEADER_HEIGHT,
  DEFAULT_HORIZONTAL_MARGIN,
  TRANSITION_BACKGROUND_COLOR,
  TRANSITION_TRANSFORM,
} from "../../lib/defaultStyles";

export const HeaderStyled = styled.header`
  z-index: 2;
  width: 100%;
  height: ${HEADER_HEIGHT};
  position: absolute;
  /* position: fixed; */
  /* text-shadow: 0 0 5px black; */
  /* background: black; */
  transition: ${TRANSITION_TRANSFORM}, ${TRANSITION_BACKGROUND_COLOR};

  /* &.hidden {
    transform: translateY(-100%);
  } */

  /* &.dark {
    background: rgba(0, 0, 0, 0.75);
    box-shadow: 0 0 1px black;
  } */
`;

export const HeaderWrapper = styled.div`
  width: max(
    calc(1280px - ${DEFAULT_HORIZONTAL_MARGIN} * 2),
    calc(60% - ${DEFAULT_HORIZONTAL_MARGIN} * 2)
  );
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 1280px) {
    width: auto;
    margin: 0 ${DEFAULT_HORIZONTAL_MARGIN};
  }
`;

export const Spacer = styled.div`
  height: ${HEADER_HEIGHT};
`;
