import styled from "styled-components";
import { Link } from "react-router-dom";
import { SectionStyle } from "../styles";

export const SimilarsStyled = styled(SectionStyle)`
  margin-bottom: 2rem;
`;

export const SimilarSlideStyled = styled(Link)`
  img {
    width: 100%;
    height: auto;
  }
`;
