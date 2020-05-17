import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionStyled } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";

export const SimilarsStyled = styled(SectionStyled)`
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

export const SimilarItemStyled = styled(Link)`
  position: relative;
  width: 100%;
  padding-top: 150%;
  height: 0;

  & > div {
    position: absolute !important;
    left: 0;
    top: 0;
  }
`;
