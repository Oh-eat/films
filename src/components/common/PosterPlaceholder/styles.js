import styled from "styled-components";

export const PosterPlaceholderStyled = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-top: 150%;
  background: rgb(45, 45, 45);

  span {
    z-index: 1;
    box-sizing: border-box;
    padding: 10%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 100%;
    text-align: center;
  }

  svg {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: rgb(60, 60, 60);
  }
`;
