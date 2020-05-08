import styled from "styled-components";
import { SectionStyle } from "../styles";

export const CreditStyled = styled(SectionStyle)``;

export const CreditSwiperWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    flex: none;
  }

  .swiper-container {
    flex: initial;
  }
`;

export const PersonCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10rem;

  img {
    width: 6rem;
    height: 9rem;
    object-fit: cover;
  }

  .placeholder {
    width: 6rem;
    height: 9rem;
    background: rgb(45, 45, 45);
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgb(120, 120, 120);
  }

  span {
    margin-top: 0.5rem;
    text-align: center;

    &.name {
      font-weight: bold;
    }
  }
`;
