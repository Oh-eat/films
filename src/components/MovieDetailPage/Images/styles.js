import styled from "styled-components";
import { SectionStyled } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";

export const PostersStyled = styled(SectionStyled)`
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};
    min-height: 0;

    button {
      grid-column: 1 / 5;
    }

    @media screen and (max-width: 567px) {
      grid-template-columns: repeat(2, 1fr);

      button {
        grid-column: 1 / 3;
      }
    }

    @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(5, 1fr);

      button {
        grid-column: 1 / 6;
      }
    }
  }
`;

export const BackdropsStyled = styled(SectionStyled)`
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};
    min-height: 0;

    button {
      grid-column: 1 / 3;
    }

    @media screen and (max-width: 567px) {
      grid-template-columns: repeat(1, 1fr);

      button {
        grid-column: 1 / 2;
      }
    }
  }
`;

export const ImagesItemStyled = styled.div`
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding-top: ${(props) => (props.type === "backdrop" ? "56.25%" : "150%")};

  & > div {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  &.loaded {
    padding-top: 0;
    height: auto;

    & > div {
      position: initial;
      width: 100%;
      height: auto;
    }
  }
`;
