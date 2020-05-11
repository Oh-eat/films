import styled, { keyframes } from "styled-components";

const spinKeyframes = keyframes`
    from{
        transform: rotate(0deg);    
    }
    to{
        transform: rotate(360deg);  
    }
`;

export const LoadingStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: ${(props) => (props.height ? 0 : "100%")};
  padding-top: ${(props) => props.height || "0"};
  opacity: 1;
  color: rgba(255, 255, 255, 0.75);
  transition: opacity 0.25s linear;

  svg {
    /* transform: translate(-50%, -50%); */
    animation: ${spinKeyframes} 1s linear infinite;
  }

  &.loaded {
    opacity: 0;
  }
`;
