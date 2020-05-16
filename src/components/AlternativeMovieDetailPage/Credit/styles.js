import styled from "styled-components";
import { SectionStyled } from "../styles";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";
import color from "../../../lib/color";

export const CreditStyled = styled(SectionStyled)`
  .content-wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${DEFAULT_HORIZONTAL_MARGIN};
    min-height: 0;

    @media screen and (max-width: 567px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const CreditItemStyled = styled.div`
  display: flex;
  align-items: flex-start;

  img,
  .placeholder {
    position: relative;
    flex: none;
    width: min(calc(60vmin / 3), 6rem);
    height: min(calc(60vmin / 2), 9rem);
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