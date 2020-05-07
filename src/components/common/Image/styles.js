import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: ${(props) =>
    props.objectFit === "fill"
      ? "100%"
      : props.basis === "height"
      ? "auto"
      : "100%"};
  height: ${(props) =>
    props.objectFit === "fill"
      ? "100%"
      : props.basis === "height"
      ? "100%"
      : "auto"};
  /* width: 100%;
  height: 100%; */

  img {
    display: block;
    object-fit: ${(props) => props.objectFit || "cover"};
    opacity: 0;
    transition: opacity 0.25s linear;
    max-width: 100%;
    max-height: 100%;
    width: ${(props) => (props.objectFit === "fill" ? "100%" : "auto")};
    height: ${(props) => (props.objectFit === "fill" ? "100%" : "auto")};

    &.loaded {
      opacity: 1;
    }
  }
`;
