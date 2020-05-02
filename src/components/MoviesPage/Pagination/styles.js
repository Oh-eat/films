import styled from "styled-components";

export const PaginationStyled = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5vmin 0;
  width: 100%;
`;

export const PrevWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex: auto;
`;

export const PageNumberWrapper = styled.ol`
  display: flex;
  flex: none;
`;

export const PageNumberStyled = styled.li`
  a {
    display: flex;
    line-height: 1;
    font-size: 1.25rem;
    padding: 1vmin;
  }

  &.selected {
    text-decoration: underline;
  }
`;

export const NextWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  flex: auto;
`;
