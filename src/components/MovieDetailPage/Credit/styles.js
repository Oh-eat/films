import styled from "styled-components";
import { SectionStyle } from "../styles";

export const CreditStyled = styled(SectionStyle)`
  /* width: calc((100vw - 1rem) / 2); */
  /* flex: auto; */
`;

export const PersonCardStyled = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  /* width: 10rem; */
  height: 9rem;

  img {
    flex: none;
    /* width: 6rem; */
    /* height: 9rem; */
    /* width: 100%; */
    /* height: auto; */
    height: 9rem;
    width: 6rem;
    object-fit: cover;
  }

  .placeholder {
    flex: none;
    /* width: 6rem; */
    /* height: 9rem; */
    box-sizing: border-box;
    /* width: 100%; */
    /* height: 0; */
    /* padding-top: 150%; */
    width: 6rem;
    height: 9rem;
    position: relative;
    background: rgb(45, 45, 45);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(120, 120, 120);

    svg {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  }

  .info {
    flex: auto;
    display: flex;
    flex-direction: column;
    margin-left: 0.25rem;

    span {
      /* margin-top: 0.5rem; */
      /* text-align: center; */

      &.name {
        font-weight: bold;
      }
    }
  }
`;
