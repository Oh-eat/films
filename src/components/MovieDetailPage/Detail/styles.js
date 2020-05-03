import styled from "styled-components";

export const DetailStyled = styled.section`
  display: grid;
  grid-template-areas:
    "title title title"
    "left poster right"
    "summary summary summary";
  grid-template-columns: repeat(3, 1fr);
`;

export const TitleStyled = styled.div`
  grid-area: title;
  display: flex;
  flex-direction: column;
  text-align: center;

  h1 {
    font-size: 2rem;
    order: 2;
  }

  h2 {
    font-size: 1rem;
    order: 1;
    opacity: 0.75;
  }
`;

export const PosterStyled = styled.div`
  grid-area: poster;
  width: 100%;
  height: 100%;
`;
