import styled from "styled-components";
import { SectionStyle } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";
import color from "../../../lib/color";

export const CreditWrapper = styled.div`
  margin-top: 6rem;
  display: grid;
  grid-gap: 0 ${DEFAULT_HORIZONTAL_MARGIN};
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-template-areas:
    "header header"
    "cast crew";

  .swiper-container {
    height: calc(
      calc(min(calc(60vmin / 2), 9rem) * 3) +
        calc(${DEFAULT_HORIZONTAL_MARGIN} * 2)
    );

    .swiper-wrapper {
      flex-direction: column;
    }

    @media screen and (max-height: 500px) {
      height: calc(
        calc(min(calc(60vmin / 2), 9rem) * 2) +
          calc(${DEFAULT_HORIZONTAL_MARGIN})
      );
    }
  }

  & > h2 {
    grid-area: header;
    line-height: 1.25;
    text-align: center;
    margin: 0 auto 2.5rem;
    padding: 0 2rem;
    display: inline-block;
    font-size: 1.5rem;
    border-left: 5px solid ${color.default.normal};
    border-right: 5px solid ${color.default.normal};
  }

  section {
    margin-top: 0;

    h2,
    h3 {
      display: none;
    }
  }

  @media screen and (max-width: 1023px) {
    margin-top: 0;
    grid-gap: 0;
    grid-template-columns: minmax(0, 1fr);
    grid-template-areas:
      "header"
      "cast"
      "crew";

    h2 {
      display: none;
    }

    section {
      margin-top: 6rem;

      h2,
      h3 {
        display: block;
      }
    }
  }
`;

export const CreditStyled = styled(SectionStyle)`
  @media screen and (max-width: 1023px) {
    h2 {
      display: none;
    }
  }
`;

export const CreditSlideStyled = styled.div`
  display: flex;
  align-items: flex-start;
  height: min(calc(60vmin / 2), 9rem);

  img,
  .placeholder {
    position: relative;
    flex: none;
    width: min(calc(60vmin / 3), 6rem);
    height: 100%;
  }

  img {
    object-fit: cover;
  }

  .placeholder {
    background: rgb(45, 45, 45);
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
      color: rgb(120, 120, 120);
      width: 100%;
      height: 100%;
    }
  }

  .info {
    flex: auto;
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;

    span {
      /* margin-top: 0.5rem; */
      /* text-align: center; */

      &.name {
        font-weight: bold;
      }
    }
  }
`;
