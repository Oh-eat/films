import styled from "styled-components";

export const Wrapper = styled.section`
  margin-top: 5vmin;
  display: grid;
  grid-gap: 0 1rem;
  grid-template-areas:
    "poster detail"
    "buttons detail";
  grid-template-rows: min-content 1fr;
`;

export const Poster = styled.div`
  flex: none;
  grid-area: poster;
  height: 70vh;

  @media screen and (orientation: landscape) {
    height: 40vh;
  }
`;

export const Detail = styled.div`
  grid-area: detail;
  display: flex;
  flex-direction: column;

  h2 {
    text-transform: uppercase;
    font-weight: normal;
    line-height: 1;
    font-size: 1rem;
  }

  & * {
    margin-top: 0.5rem;
  }
`;

export const Title = styled.div`
  display: flex;
  align-items: center;

  h1 {
    text-transform: uppercase;
    line-height: 1;
    font-size: 2rem;
  }

  span {
    margin-left: 0.5rem;
  }
`;

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
`;

export const GenreTag = styled.li`
  margin-right: 0.25rem;
  line-height: 1;
`;

export const Summary = styled.div`
  display: flex;
  flex-direction: column;

  em {
    font-size: 1.25rem;
    font-weight: normal;
    font-style: italic;
  }

  p {
    margin: 0;
    font-size: 1.1rem;
    line-height: 1.5;
  }
`;
