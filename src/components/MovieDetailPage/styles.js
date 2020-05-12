import styled from "styled-components";
import color from "../../lib/color";

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6rem;

  & > * {
    margin: 0;
  }

  h2,
  h3 {
    line-height: 1.25;
    text-align: center;
  }

  h2 {
    margin: 0 auto 2.5rem;
    padding: 0 2rem;
    display: inline-block;
    font-size: 1.5rem;
    border-left: 5px solid ${color.default.normal};
    border-right: 5px solid ${color.default.normal};
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-style: italic;
  }

  .swiper-slide.click-action {
    transition: transform 0.25s ease;
    cursor: pointer;

    &:hover {
      transform: scale(0.95, 0.95);
    }
  }
`;

export const Wrapper = styled.section`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: calc(100% - 4rem);
  margin: 2rem auto;
  width: 100%;

  .header {
    display: flex;
    flex-direction: column;
    flex: initial;
    width: max-content;
    order: 2;
    max-width: 60%;
  }

  @media screen and (orientation: portrait) {
    flex-direction: column;
    justify-content: flex-start;
    height: auto;

    .header {
      order: 1;
      margin: 0;
      /* width: 100%; */
      max-width: 100%;
    }
  }

  @media screen and (min-width: 768px) and (min-height: 768px) {
    height: auto;
    flex-direction: column;
    justify-content: flex-start;

    .header {
      order: 1;
      margin: 0;
      width: 100%;
    }
  }
`;

export const NoContentStyled = styled.span`
  color: gray;
  text-align: center;
`;
