import { keyframes, css } from "styled-components";

export const transitionHeight = `height 0.25s ease`;
export const transitionBackgroundColor = `background-color 0.25s ease`;
export const transitionColor = `color 0.25s ease`;

const fadeInKeyframes = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;
export const fadeIn = css`
  ${fadeInKeyframes} ${"0.5s forwards"}
`;
