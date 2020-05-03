import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  img {
    width: 100%;
    height: ${(props) => (props.objectFit === "fill" ? "100%" : "auto")};
    object-fit: ${(props) => props.objectFit || "cover"};
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.25s linear;

    &.loaded {
      opacity: 1;
    }
  }
`;
