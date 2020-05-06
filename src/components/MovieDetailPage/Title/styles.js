import styled from "styled-components";

export const TitleStyled = styled.div`
  margin-top: 5vmin;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1;

  h1 {
    font-size: 2rem;
    order: 2;
  }

  h2 {
    font-size: 1rem;
    order: 1;
  }
`;
