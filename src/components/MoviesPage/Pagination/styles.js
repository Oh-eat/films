import styled from "styled-components";

export const PaginationStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vmin 0;
  width: 100%;
`;

export const PrevWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const PageNumberWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 0 0.5rem;
`;

export const PageNumberStyled = styled.li`
  a {
    display: flex;
    line-height: 1;
    font-size: 1rem;
  }

  &.selected {
    text-decoration: underline;
  }

  & + & {
    margin-left: 0.75rem;
  }
`;

export const NextWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
`;
