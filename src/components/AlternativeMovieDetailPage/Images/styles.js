import styled from "styled-components";
import { SectionStyled } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";

export const PostersStyled = styled(SectionStyled)`
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};
    min-height: 0;

    @media screen and (max-width: 567px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 1280px) {
      grid-template-columns: repeat(5, 1fr);
    }
  }
`;

export const BackdropsStyled = styled(SectionStyled)`
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};
    min-height: 0;

    @media screen and (max-width: 567px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (min-width: 768px) and (min-height: 768px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export const ImagesItemStyled = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
