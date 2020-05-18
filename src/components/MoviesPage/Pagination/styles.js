import styled from "styled-components";
import { FADE_IN } from "../../../lib/defaultStyles";

export const PaginationStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vmin 0;
  width: 100%;

  a {
    opacity: 0;
    animation: ${FADE_IN} linear;
  }

  a,
  button {
    margin: 0 0.1rem;
  }
`;

export const PrevWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex: auto;
`;

export const NextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex: auto;
`;

export const PageNumberWrapper = styled.ol`
  display: flex;
  align-items: center;
  flex: none;
`;

export const PageNumberStyled = styled.li``;
