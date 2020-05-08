import styled from "styled-components";

export const InfoStyled = styled.div`
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: flex-start;
  max-width: 768px;

  /* @media screen and (max-width: 767px) {
    width: 100%;
  } */
`;

export const InfoItemStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1;

  svg {
    margin-bottom: 1rem;
  }

  span {
    font-size: 1rem;
  }

  span + span {
    margin-top: 0.75rem;
  }
`;
