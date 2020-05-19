import styled, { keyframes } from "styled-components";
import { TRANSITION_OPACITY } from "../../../lib/defaultStyles";

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
  height: 100%;
  opacity: 1;
  color: rgba(255, 255, 255, 0.75);
  transition: ${TRANSITION_OPACITY};

  svg {
    animation: ${spinKeyframes} 1s linear infinite;
  }

  &.loaded {
    opacity: 0;
  }
`;
