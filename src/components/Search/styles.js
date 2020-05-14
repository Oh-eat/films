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
  width: 100%;
  height: 0;
  /* height: 100%; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transition: height 0.5s ease, opacity 0.5s ease;
  /* transform: translateY(-100%); */
  /* transition: transform 0.5s ease; */

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
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;

    input {
      width: 100%;
      box-sizing: border-box;
      padding: 0.5rem;
      outline: none;
      border: none;
      background: transparent;
      border-bottom: 2px solid ${color.default.normal};
      font-size: 1.25rem;
      font-weight: 100;
      color: ${color.default.normal};
    }
  }

  &.visible {
    opacity: 1;
    height: 100%;
    /* transform: translateY(0); */
  }
`;

export const SearchTextStyled = styled.div`
  width: max-content;
  margin: 5vmin auto;
  padding: 1.5vmin 3vmin;
  font-size: 3vmin;
  font-weight: 300;
  text-align: center;
  border-top: 0.5vmin solid white;
  border-bottom: 0.5vmin solid white;

  em {
    margin-left: 1.5vmin;
    font-weight: 600;
  }
`;
