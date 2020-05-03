import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import color from "../../../lib/color";
import {
  TRANSITION_BACKGROUND_COLOR,
  TRANSITION_COLOR,
} from "../../../lib/defaultStyles";

const ButtonStyle = css`
  cursor: pointer;
  display: flex;
  position: relative;
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
  transition: border 0.25s ease, ${TRANSITION_BACKGROUND_COLOR},
    ${TRANSITION_COLOR};

  &.outlined {
    border: 2px solid ${(props) => color[props.color || "default"].normal};
    color: ${(props) => color[props.color || "default"].normal};

    &:hover {
      border-color: ${(props) => color[props.color || "default"].dark};
      color: ${(props) => color[props.color || "default"].dark};
    }
  }

  &.filled {
    border: 2px solid ${(props) => color[props.color || "default"].normal};
    background-color: ${(props) => color[props.color || "default"].normal};
    color: black;

    &:hover {
      border-color: ${(props) => color[props.color || "default"].dark};
      background-color: ${(props) => color[props.color || "default"].dark};
    }
  }

  &.transparent {
    border: 2px solid transparent;
    color: ${(props) => color[props.color || "default"].normal};

    &:hover {
      background-color: ${color.default.background};
    }
  }

  &.circle {
    padding: 0.3rem;
    border-radius: 100%;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const ActionButtonStyled = styled.button`
  ${ButtonStyle}
`;

export const LinkButtonStyled = styled(Link)`
  ${ButtonStyle}
`;
