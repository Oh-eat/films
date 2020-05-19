import styled from "styled-components";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../lib/defaultStyles";

export const AboutPageBodyStyled = styled.div`
  min-height: 100%;
  width: min(100%, 1024px);
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  section {
    width: 100%;
    margin: 3rem 0 2rem;

    h2 {
      font-size: 2rem;
      margin-bottom: 2rem;
    }

    a {
      color: dodgerblue;
    }
  }

  #TMDB-logo {
    width: 100%;
  }

  .wrapper {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-items: center;
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};

    .item {
      position: relative;
      padding-top: 100%;
      width: 100%;
      background: radial-gradient(
        transparent,
        transparent,
        rgba(255, 255, 255, 0.5)
      );
      border-radius: 100rem;
      height: 0%;
      align-self: center;

      & > * {
        display: block;
        font-size: 1.75rem;
        position: absolute;
        top: 50%;
        left: 50%;
        text-align: center;
        transform: translate(-50%, -50%);
      }
    }

    .item-with-image {
      width: 80%;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;

      .image-wrapper {
        position: relative;
        padding-top: 100%;
        width: 100%;
        height: 0;

        img {
          position: absolute;
          width: 100%;
          height: auto;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      }

      span {
        margin-top: 0.5rem;
        text-align: center;
      }
    }
  }

  @media screen and (max-width: 1023px) {
    .wrapper {
      grid-template-columns: repeat(4, 1fr);
    }
  }

  @media screen and (max-width: 567px) {
    .wrapper {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`;
