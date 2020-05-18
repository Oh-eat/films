import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
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

  img {
    display: block;
    object-fit: ${(props) => props.objectFit || "cover"};
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
    opacity: 0;
    transition: opacity 0.25s linear;

    &.loaded {
      opacity: 1;
    }
  }
`;
