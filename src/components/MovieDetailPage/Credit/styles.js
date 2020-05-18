import styled from "styled-components";
import { DEFAULT_HORIZONTAL_MARGIN } from "../../../lib/defaultStyles";
import { SectionStyled } from "../styles";

export const CreditStyled = styled(SectionStyled)`
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

export const CreditItemStyled = styled.div`
  display: flex;
  align-items: flex-start;

  .image,
  .placeholder {
    flex: none;
    width: min(calc(60vmin / 3), 6rem);
    height: min(calc(60vmin / 2), 9rem);
  }

  .placeholder {
    background: rgb(45, 45, 45);

    svg {
      color: rgb(120, 120, 120);
    }
  }

  .info {
    flex: auto;
    display: flex;
    flex-direction: column;
    margin-left: 0.5rem;
  }
`;
