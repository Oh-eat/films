import styled, { keyframes } from "styled-components";
import { TRANSITION_TRANSFORM } from "../../lib/defaultStyles";

const fromRight = keyframes`
    from {
        transform: translateX(100%);
    }
    to {
        transform: translateX(0);
    }
`;
const fromLeft = keyframes`
    from {
        transform: translateX(-100%);
    }
    to {
        transform: translateX(0);
    }
`;
const toRight = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(101%);
    }
`;
const toLeft = keyframes`
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-101%);
    }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const OuterSectionWrapper = styled.div`
  flex: auto;
  margin: 1rem 0;
  width: 100%;
  overflow: hidden;

  @media screen and (min-width: 768px) and (min-height: 768px) {
    margin: 2rem 0;
  }
`;

export const InnerSectionWrapper = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

export const SectionStyled = styled.section`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: auto;

  .content-wrapper {
    width: 100%;
    min-height: 100%;
  }

  .click-action {
    transition: ${TRANSITION_TRANSFORM};
    cursor: pointer;

    @media screen and (hover: hover) {
      &:hover {
        transform: scale(0.975, 0.975);
      }
    }
  }

  &.initial {
    transform: translateX(0);
  }
  &.from-right {
    animation: ${fromRight} 0.5s ease forwards;
  }
  &.from-left {
    animation: ${fromLeft} 0.5s ease forwards;
  }
  &.to-right {
    animation: ${toRight} 0.5s ease forwards;
  }
  &.to-left {
    animation: ${toLeft} 0.5s ease forwards;
  }
  &.hidden {
    display: none;
  }
`;
