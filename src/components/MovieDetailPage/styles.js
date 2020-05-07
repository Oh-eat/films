import styled from "styled-components";
import color from "../../lib/color";

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;

  & > * {
    margin: 0;
  }

  h2,
  h3 {
    line-height: 1.25;
    text-align: center;
  }

  h2 {
    margin: 0 auto 2rem;
    padding: 0 2rem;
    display: inline-block;
    font-size: 2rem;
    border-left: 5px solid ${color.default.normal};
    border-right: 5px solid ${color.default.normal};
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-style: italic;
  }
`;

export const Detail = styled(SectionStyle)`
  display: grid;
  grid-template-areas:
    "poster detail"
    "poster detail"
    "poster detail"
    "buttons detail";
  grid-template-columns: min-content auto;

  .poster {
    grid-area: poster;
    & > * {
      width: auto !important;
    }
  }

  .buttons {
    grid-area: buttons;
  }

  .detail {
    grid-area: detail;
    display: grid;
    grid-template-columns: 1fr;
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  /* display: grid;
  grid-template-columns: fit-content(100%) auto;
  grid-gap: 1rem; */
  height: calc(100% - 4rem);
  margin: 2rem auto;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
`;
