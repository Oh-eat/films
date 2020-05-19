import styled from "styled-components";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../lib/defaultStyles";
import color from "../../lib/color";

export const SearchBarStyled = styled.div`
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  position: fixed;
  z-index: 6;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 0;
  opacity: 0;
  transition: height 0.5s ease, opacity 0.5s ease;

  &.visible {
    opacity: 1;
    height: 100%;
  }

  .close {
    position: absolute;
    top: ${DEFAULT_HORIZONTAL_MARGIN};
    right: ${DEFAULT_HORIZONTAL_MARGIN};
  }

  span {
    font-size: 2rem;
  }

  form {
    width: min(calc(100% - ${DEFAULT_HORIZONTAL_MARGIN} * 2), 25rem);
    margin-top: 1rem;
    display: grid;
    grid-template-columns: auto max-content;
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};
    align-items: center;

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.5rem;
      outline: none;
      border: none;
      background: transparent;
      border-bottom: 2px solid ${color.default.normal};
      font-size: 1.25rem;
      color: ${color.default.normal};
    }
  }
`;

export const SearchTextStyled = styled.div`
  width: max-content;
  margin: 5vmin auto;
  padding: 1.5vmin 3vmin;
  font-size: 3vmin;
  line-height: 1;
  text-align: center;
  border-top: 0.5vmin solid ${color.default.normal};
  border-bottom: 0.5vmin solid ${color.default.normal};

  em {
    margin-left: 1.5vmin;
  }
`;
