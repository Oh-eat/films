import styled from "styled-components";
import { SectionStyled } from "../styles";

export const SummaryStyled = styled(SectionStyled)`
  .content-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  em {
    font-size: 1.25rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    margin-top: 1rem;
    box-sizing: border-box;
    /* padding: 0 2vmin; */
    /* text-align: justify; */
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    em {
      font-size: 1.5rem;
    }

    p {
      font-size: 1.25rem;
    }
  }
`;
