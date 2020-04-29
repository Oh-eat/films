import styled from "styled-components";

export const VerticalNavStyled = styled.nav`
  display: none;
  position: relative;
  @media (max-width: 1024px) {
    & {
      display: block;
    }
  }
`;

export const VerticalNavButtonsStyled = styled.div`
  transform: translateX(0.5rem);
`;
