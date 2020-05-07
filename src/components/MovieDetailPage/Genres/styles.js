import styled from "styled-components";
import color from "../../../lib/color";

export const Wrapper = styled.div`
  margin-top: 0.75rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const GenreTagStyled = styled.span`
  /* border-radius: 5px;
  border: 1px solid ${color.default.normal}; */
  color: ${color.default.normal};
  font-size: 1rem;
  display: inline-block;
  line-height: 1;

  & + & {
    padding-left: 0.5rem;
    /* border-left: 1px solid ${color.default.normal};
    margin-left: 0.5rem; */
  }
`;
