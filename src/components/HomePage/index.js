import React from "react";
import { Wrapper } from "./styles";
import Button from "../common/Button";

function HomePageBody({ detail }) {
  return (
    <Wrapper>
      <h2>{detail.title}</h2>
      <p>
        <em>{detail.tagline}</em>
      </p>
      <Button fontSize="4vmin" variant="outlined" to={`/movie/${detail.id}`}>
        더 보기
      </Button>
    </Wrapper>
  );
}

export default HomePageBody;
