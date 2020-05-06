import styled from "styled-components";

export const InfoStyled = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  align-items: flex-start;
  /* display: flex;
  justify-content: space-evenly;
  align-items: flex-start;
  flex-wrap: wrap; */
  /* flex-direction: column; */
  /* border: 1px solid rgba(255, 255, 255, 0.1); */
`;

export const InfoItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  svg {
    margin-bottom: 0.5rem;
  }

  span {
    font-size: 1.25rem;
  }
`;
