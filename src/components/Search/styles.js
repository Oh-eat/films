import styled from "styled-components";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../lib/defaultStyles";
import color from "../../lib/color";

export const SearchBarStyled = styled.div`
  background: rgba(0, 0, 0, 0.8);
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
  transition: height 0.5s ease;
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
    width: min(calc(100% - ${DEFAULT_HORIZONTAL_MARGIN}), 20rem);
    margin-top: 1rem;
    display: grid;
    grid-template-columns: 1fr initial;
    grid-gap: 1rem;
    align-items: center;
    justify-items: center;

    input[type="text"] {
      padding: 0.75rem;
      outline: none;
      border: none;
      background: transparent;
      border-bottom: 2px solid ${color.default.normal};
      font-size: 1.5rem;
      font-weight: 100;
      color: ${color.default.normal};
    }
  }

  &.visible {
    height: 100%;
    /* transform: translateY(0); */
  }

  @media screen and (max-width: 500px) {
    form {
      grid-template-columns: 1fr;
    }
  }
`;
