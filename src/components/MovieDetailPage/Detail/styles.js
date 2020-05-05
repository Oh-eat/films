import styled from "styled-components";

export const DetailStyled = styled.section`
  display: flex;
  flex-direction: column;

  .info {
    display: grid;
    grid-template-areas: "left poster right";
    grid-template-columns: 1fr min-content 1fr;
    /* grid-template-areas:
      "poster left"
      "poster right";
    grid-template-columns: min-content auto; */
    grid-gap: 1rem;
  }

  .left {
    grid-area: left;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(10vmin, 15vmin)); */
    /* grid-template-columns: repeat(auto-fill, minmax(10vmin, 15vmin)); */
  }

  .right {
    /* grid-area: right; */
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    /* display: grid; */
    /* grid-template-columns: repeat(auto-fill, minmax(10vmin, 15vmin)); */
    /* grid-template-columns: repeat(auto-fill, minmax(10vmin, 15vmin)); */
  }

  .summary {
    grid-area: right;
    em {
      font-size: 1.5rem;
    }
  }
`;

export const TitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 5vmin;
  text-transform: uppercase;
  letter-spacing: 1px;

  h1 {
    font-size: 2rem;
    order: 2;
  }

  h2 {
    font-size: 1rem;
    order: 1;
  }
`;

export const PosterStyled = styled.div`
  grid-area: poster;
  height: 50vh;
`;

export const InfoItemStyled = styled.div`
  /* position: relative;
  width: 100%;
  padding-top: 100%;
  height: 0;
  flex: none; */

  & > * {
    /* box-sizing: border-box;
    border: 0.5vmin solid white;
    border-radius: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
    /* font-size: 2.5vmin; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
`;
