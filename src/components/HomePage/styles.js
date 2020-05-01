import styled from "styled-components";

export const Wrapper = styled.section`
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
  text-shadow: 0 0 5px black;

  h2 {
    font-size: 6vmin;
    letter-spacing: 2px;
  }

  p {
    margin: 2vh 0 3vh;
    font-size: 4vmin;
  }
`;
