import styled from "styled-components";
import { SectionStyled } from "../styles";

export const IntroductionStyled = styled(SectionStyled)`
  .content-wrapper {
    display: flex;
    flex-direction: column;

    .poster-title {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    .title-info {
      display: flex;
      flex-direction: column;
      max-width: 100%;
    }

    .info-under-title {
      display: none;
    }

    @media screen and (min-width: 568px) {
      min-height: unset;
      height: 100%;
      display: grid;
      grid-template-columns: 1fr;
      grid-template-rows: 100% auto;

      .poster-title {
        flex-direction: row;
        justify-content: space-evenly;
        height: 100%;
      }

      .title-info {
        max-width: 45%;
      }
    }

    @media screen and (min-height: 568px) {
      display: flex;
      min-height: 100%;
      height: auto;
    }

    @media screen and (min-width: 568px) and (min-height: 568px) {
      justify-content: center;
    }

    @media screen and (min-width: 1024px) and (min-height: 768px) {
      .info-under-title {
        display: block;
      }

      .info-fluid {
        display: none;
      }
    }
  }
`;

export const PosterStyled = styled.div`
  width: max-content;

  .basis-height {
    height: 50vh;
  }

  .basis-width {
    display: none;
    width: 70vw;
  }

  @media screen and (min-width: 568px) {
    margin-right: 1rem;
  }

  @media screen and (min-width: 568px) and (max-height: 567px) {
    &,
    .basis-height {
      height: 100%;
    }
  }

  @media screen and (orientation: portrait) and (max-width: 567px) {
    margin-bottom: 1rem;

    .basis-height {
      display: none;
    }

    .basis-width {
      display: block;
    }
  }

  @media screen and (min-width: 1024px) and (min-height: 768px) {
    .basis-height {
      height: 60vmin;
    }
  }
`;

export const TitleStyled = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.25rem;
  text-align: center;
  text-transform: uppercase;

  .title,
  .original-title {
    letter-spacing: 1px;
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    .title {
      font-size: 1.75rem;
    }
  }
`;

export const InfoStyled = styled.ul`
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: flex-start;
  max-width: min(768px, 100%);

  /* @media screen and (max-width: 767px) {
    width: 100%;
  } */
`;

export const InfoItemStyled = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  line-height: 1;
  padding: 0 0.75rem;

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
