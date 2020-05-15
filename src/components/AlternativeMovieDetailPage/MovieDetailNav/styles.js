import styled from "styled-components";
import { TRANSITION_BACKGROUND_COLOR } from "../../../lib/defaultStyles";
import color from "../../../lib/color";

export const MovieDetailNavStyled = styled.nav`
  display: flex;
  /* justify-content: space-between; */
  justify-content: flex-end;
  align-items: center;
  height: 1.5rem;
  margin: 0 auto 1rem;

  span {
    font-size: 1rem;
  }
`;

export const NavItemWrapper = styled.ul`
  display: flex;
`;

export const NavItemStyled = styled.li`
  cursor: pointer;
  height: 100%;
  box-sizing: border-box;
  padding: 0.25rem 0.5rem;
  font-size: 1rem;
  transition: ${TRANSITION_BACKGROUND_COLOR};

  &:hover {
    background: ${color.default.background};
  }

  &.empty {
    color: gray;

    &:hover {
      background: none;
    }
  }
`;
