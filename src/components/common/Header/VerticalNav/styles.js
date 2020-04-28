import styled from "styled-components";

export const Fullscreen = styled.div`
  z-index: 100;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  display: none;

  &.visible {
    display: block;
  }
`;
