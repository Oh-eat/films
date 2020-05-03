import styled from "styled-components";
import {
  NavItemWrapper,
  NavItemStyled,
  NavItemCaptionStyled,
  SubnavItemWrapper,
  SubnavItemStyled,
  SubnavItemCaptionStyled,
} from "../Nav/styles";

export const HorizontalNavStyled = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const HorizontalNavItemWrapper = styled(NavItemWrapper)``;

export const HoverableNavItemStyled = styled(NavItemStyled)``;

export const HorizontalNavItemCaptionStyled = styled(NavItemCaptionStyled)`
  cursor: default;
  width: 7rem;
  height: 3rem;
`;

export const HoverableSubnavItemWrapper = styled(SubnavItemWrapper)`
  position: absolute;
  color: transparent;

  &.visible {
    color: inherit;
  }
`;

export const HoverableSubnavItemStyled = styled(SubnavItemStyled)``;

export const HorizontalSubnavItemCaptionStyled = styled(
  SubnavItemCaptionStyled
)`
  height: 2.5rem;
`;
