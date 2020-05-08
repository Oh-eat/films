import styled from "styled-components";

export const TitleStyled = styled.div`
  /* margin-top: 5vmin; */
  display: grid;
  align-items: center;
  justify-items: center;
  grid-gap: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  /* line-height: 1; */
  text-align: center;

  h1 {
    font-size: 1.75rem;
    order: 1;
  }

  h2 {
    font-size: 1rem;
    font-weight: 300;
    order: 2;
  }

  span {
    font-weight: 300;
    order: 3;
  }
`;
