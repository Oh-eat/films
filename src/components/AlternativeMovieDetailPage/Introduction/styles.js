import styled from "styled-components";
import { SectionStyled } from "../styles";

export const IntroductionStyled = styled(SectionStyled)`
  .content-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;

    .poster-title {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-evenly;
    }
    .title-info {
      display: flex;
      flex-direction: column;
      max-width: 50%;
    }
    .info-under-title {
      display: none;
    }

    @media screen and (orientation: portrait) {
      .title-info {
        max-width: 100%;
      }
    }

    @media screen and (min-width: 1024px) and (min-height: 768px) {
      .poster-title {
        min-height: 0;
      }

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
    height: 55vmin;
  }

  .basis-width {
    display: none;
    width: 70vw;
  }
  @media screen and (orientation: portrait) and (max-width: 567px) {
    .basis-height {
      display: none;
    }

    .basis-width {
      display: block;
    }
  }
`;

export const TitleStyled = styled.div`
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 0.25rem;
  text-align: center;

  @media screen and (orientation: portrait) and (max-width: 567px) {
    margin-top: 1rem;
  }
`;

export const InfoStyled = styled.ul`
  margin: 2rem auto 0;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: flex-start;
  max-width: 768px;

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
