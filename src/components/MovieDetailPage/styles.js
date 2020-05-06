import styled from "styled-components";
import color from "../../lib/color";

export const SectionStyle = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;

  & > * {
    margin: 0;
  }

  h2,
  h3 {
    line-height: 1.25;
    text-align: center;
  }

  h2 {
    margin: 0 auto 2rem;
    padding: 0 2rem;
    display: inline-block;
    font-size: 2rem;
    border-left: 5px solid ${color.default.normal};
    border-right: 5px solid ${color.default.normal};
  }

  h3 {
    margin-bottom: 1rem;
    font-size: 1.25rem;
    font-style: italic;
  }
`;
