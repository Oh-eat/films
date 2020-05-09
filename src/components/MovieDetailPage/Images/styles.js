import styled from "styled-components";
import { SectionStyle } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";

export const PostersStyled = styled(SectionStyle)``;

export const BackdropsStyled = styled(SectionStyle)``;

// export const BackdropGrid = styled.div`
//   display: grid;
//   grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};

//   @media screen and (min-width: 1024px) {
//     grid-template-columns: repeat(3, 1fr);
//   }

//   @media screen and (max-width: 1023px) {
//     grid-template-columns: repeat(2, 1fr);
//   }

//   @media screen and (max-width: 600px) and (orientation: portrait) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

export const PosterGrid = styled.div`
  display: grid;
  grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};

  @media screen and (min-width: 1281px) {
    grid-template-columns: repeat(7, 1fr);
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media screen and (max-width: 600px) and (orientation: portrait) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
