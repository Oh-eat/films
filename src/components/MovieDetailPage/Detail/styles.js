import styled from "styled-components";

export const DetailStyled = styled.section`
  display: flex;
  flex-direction: column;

  .info {
    display: grid;
    grid-template-areas: "poster left right";
    grid-template-columns: repeat(2, 1fr);
  }

  .left {
    display: grid;
    height: min-content;
    /* grid-template-columns: repeat(auto-fill, minmax(10vmin, 15vmin)); */
    grid-template-columns: repeat(auto-fill, minmax(10vmin, 15vmin));
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5vmin;
  text-transform: uppercase;

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
  position: relative;
  grid-area: poster;
  width: 100%;
  padding-top: 150%;

  & > * {
    position: absolute !important;
    top: 0;
    left: 0;
  }
`;

export const InfoItemStyled = styled.div`
  position: relative;
  width: 100%;
  padding-top: 100%;
  height: 0;
  flex: none;

  & > * {
    font-size: 2.5vmin;
    box-sizing: border-box;
    border: 0.5vmin solid white;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
