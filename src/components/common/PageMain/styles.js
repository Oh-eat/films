import styled from "styled-components";
import {
  HEADER_HEIGHT,
  DEFAULT_HORIZONTAL_MARGIN,
} from "../../../lib/defaultStyles";

export const PageMainStyled = styled.main`
  min-height: calc(100vh - ${HEADER_HEIGHT});
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PageMainWrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: max(
    calc(1280px - ${DEFAULT_HORIZONTAL_MARGIN} * 2),
    calc(60% - ${DEFAULT_HORIZONTAL_MARGIN} * 2)
  );

  @media (max-width: 1280px) {
    margin: 0 ${DEFAULT_HORIZONTAL_MARGIN};
    width: calc(100% - ${DEFAULT_HORIZONTAL_MARGIN} * 2);
    box-sizing: border-box;
  }
`;
