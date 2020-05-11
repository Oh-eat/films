import styled from "styled-components";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../lib/defaultStyles";

export const ZoomStyled = styled.div`
  z-index: 5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const Wrapper = styled.div`
  box-sizing: border-box;
  padding: ${DEFAULT_HORIZONTAL_MARGIN};
  display: grid;
  /* grid-gap: ${DEFAULT_HORIZONTAL_MARGIN} 0; */
  height: 100%;

  img {
    box-sizing: border-box;
    object-fit: contain;
    max-height: 100%;
    max-width: 100%;
    height:auto;
    width:auto;
  }
`;
