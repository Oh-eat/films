import styled from "styled-components";

export const HeaderStyled = styled.header`
  z-index: 2;
  width: calc(100% - 1rem * 2);
  height: 5rem;
  padding: 0 1rem;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-shadow: 0 0 3px black;
  /* color: white; */
`;

export const Spacer = styled.div`
  height: 5rem;
`;
