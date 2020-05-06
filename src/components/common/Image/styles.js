import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  &,
  img {
    width: ${(props) =>
      props.objectFit === "fill" || props.objectFit === "contain"
        ? "100%"
        : props.basis === "height"
        ? "auto"
        : "100%"};
    height: ${(props) =>
      props.objectFit === "fill" || props.objectFit === "contain"
        ? "100%"
        : props.basis === "height"
        ? "100%"
        : "auto"};
  }
  /* width: 100%;
  height: 100%; */

  img {
    object-fit: ${(props) => props.objectFit || "cover"};
    opacity: 0;
    transition: opacity 0.25s linear;

    &.loaded {
      opacity: 1;
    }
  }
`;
