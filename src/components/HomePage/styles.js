import styled from "styled-components";

export const Wrapper = styled.section`
  z-index: 1;
  position: absolute;
  left: 50%;
  bottom: 7.5vh;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  transform: translateX(-50%);

  h2 {
    font-size: 6vmin;
    letter-spacing: 2px;
    margin-bottom: 2vh;
  }

  em {
    margin-bottom: 3vh;
    font-size: 4vmin;
  }
`;
