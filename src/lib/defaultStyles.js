//@ts-ignore
import { keyframes, css } from "styled-components";

export const DEFAULT_HORIZONTAL_MARGIN = "max(1rem, 2vmin)";
export const HEADER_HEIGHT = "3.5rem";

const TRANSITION_DURATION = "0.25s";
export const TRANSITION_HEIGHT = `height ${TRANSITION_DURATION} ease`;
export const TRANSITION_COLOR = `color ${TRANSITION_DURATION} ease`;
export const TRANSITION_BACKGROUND_COLOR = `background-color ${TRANSITION_DURATION} ease`;
export const TRANSITION_OPACITY = `opacity ${TRANSITION_DURATION} linear`;
export const TRANSITION_TRANSFORM = `transform ${TRANSITION_DURATION} ease`;

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
