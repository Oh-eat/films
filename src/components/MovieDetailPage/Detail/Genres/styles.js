import styled from "styled-components";
import color from "../../../../lib/color";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const GenreTagStyled = styled.span`
  /* border-radius: 5px;
  border: 1px solid ${color.default.normal}; */
  padding: 0 0.5rem;
  color: ${color.default.normal};
  font-size: 0.75rem;

  /* & + & {
    margin-left: 0.2rem;
  } */
`;
