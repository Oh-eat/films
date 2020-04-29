import styled from "styled-components";

export const FullscreenBackgroundStyled = styled.img`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(0.75);
  opacity: 0;
  transition: opacity 0.25s linear;

  &.loaded {
    opacity: 1;
  }
`;
