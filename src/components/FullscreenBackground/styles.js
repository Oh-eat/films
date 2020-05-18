import styled from "styled-components";

export const FullscreenBackgroundStyled = styled.img`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  object-fit: cover;
  opacity: 0;
  filter: brightness(0.25);
  transition: opacity 0.25s linear, filter 0.25s linear;

  &.dark {
    filter: brightness(0.25);
  }

  &.normal {
    filter: brightness(0.5);
  }

  &.bright {
    filter: brightness(0.75);
  }

  &.loaded {
    opacity: 1;
  }
`;

export const BackgroundPlaceholderStyled = styled.div`
  z-index: -1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: radial-gradient(rgb(20, 20, 20), black);
  font-size: 20vmin;
  color: black;
  text-transform: uppercase;
  transition: opacity 0.25s linear, filter 0.25s linear;

  &.visible {
    opacity: 1;
  }
`;
