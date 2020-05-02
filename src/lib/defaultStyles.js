//@ts-ignore
import { keyframes, css } from "styled-components";

export const DEFAULT_HORIZONTAL_MARGIN = "max(1rem, 2vmin)";
export const HEADER_HEIGHT = "4rem";

export const TRANSITION_HEIGHT = `height 0.25s ease`;
export const TRANSITION_BACKGROUND_COLOR = `background-color 0.25s ease`;
export const TRANSITION_COLOR = `color 0.25s ease`;

const FADE_INKeyframes = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const FADE_IN = css`
  ${FADE_INKeyframes} ${"0.5s forwards"}
`;
