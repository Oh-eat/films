import styled from "styled-components";

export const HomePageBodyStyled = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 5rem);
`;

export const Wrapper = styled.div`
  z-index: 1;
  text-align: center;
  position: absolute;
  width: 80%;
  left: 50%;
  bottom: 7.5vh;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    font-size: min(6vw, 6vh);
    letter-spacing: 2px;
  }

  p {
    margin: 2vh 0 3vh;
    font-size: min(4vw, 4vh);
  }
`;
