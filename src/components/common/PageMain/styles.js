import styled from "styled-components";
import {
  HEADER_HEIGHT,
  DEFAULT_HORIZONTAL_MARGIN,
} from "../../../lib/defaultStyles";

export const PageMainStyled = styled.main`
  min-height: calc(100% - ${HEADER_HEIGHT});
  /* min-height: 100%; */
  width: 100%;
  display: block;
  position: absolute;
`;

export const PageMainWrapper = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  position: absolute;
  min-height: 100%;
  width: max(
    calc(1280px - ${DEFAULT_HORIZONTAL_MARGIN} * 2),
    calc(60% - ${DEFAULT_HORIZONTAL_MARGIN} * 2)
  );

  @media screen and (max-width: 1280px) {
    margin: 0 ${DEFAULT_HORIZONTAL_MARGIN};
    width: calc(100% - ${DEFAULT_HORIZONTAL_MARGIN} * 2);
    box-sizing: border-box;
  }
`;
