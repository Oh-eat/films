import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import color from "../../../lib/color";

const ButtonStyle = css`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: content-box;
  padding: 0.25rem 1rem;
  background: none;
  border: none;
  outline: none;
  width: ${(props) => (props.size ? props.size : props.width || "auto")};
  height: ${(props) => (props.size ? props.size : props.height || "auto")};
  font-size: ${(props) => props.fontSize || "initial"};
  visibility: ${(props) => (props.hidden ? "hidden" : "visible")};
  transition: border 0.25s ease, background-color 0.25s ease, color 0.25s ease;

  &.outlined,
  &.filled {
    border: 2px solid
      ${(props) =>
        props.color ? color[props.color].normal : color.default.normal};
    color: ${(props) =>
      props.color ? color[props.color].normal : color.default.normal};
    &:hover {
      border-color: ${(props) =>
        props.color ? color[props.color].dark : color.default.dark};
      color: ${(props) =>
        props.color ? color[props.color].dark : color.default.dark};
    }
  }

  &.filled {
    background-color: ${(props) =>
      props.color ? color[props.color].normal : color.default.normal};
    color: black;
    &:hover {
      background-color: ${(props) =>
        props.color ? color[props.color].dark : color.default.dark};
      color: black;
    }
  }

  &.transparent,
  &.icon {
    color: ${(props) =>
      props.color ? color[props.color].normal : color.default.normal};
    &:hover {
      background-color: ${color.default.background};
    }
  }

  &.icon {
    padding: 0.25rem;
    width: ${(props) => (props.size ? props.size : props.width || "2rem")};
    height: ${(props) => (props.size ? props.size : props.height || "2rem")};
    border-radius: 100%;
  }
`;

export const ActionButtonStyled = styled.button`
  ${ButtonStyle}
`;

export const LinkButtonStyled = styled(Link)`
  ${ButtonStyle}
`;
