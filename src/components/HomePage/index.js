import React from "react";
import { Helmet } from "react-helmet";
import { isEmpty } from "../../lib/isEmpty";
import Button from "../common/Button";
import { Wrapper } from "./styles";

function HomePageBody({ detail }) {
  return (
    <Wrapper>
      <Helmet>
        <title>FILMS</title>
      </Helmet>
      <h2>{detail.title}</h2>
      {!isEmpty(detail.tagline) && <em>{detail.tagline}</em>}
      <Button fontSize="4vmin" variant="outlined" to={`/movie/${detail.id}`}>
        바로가기
      </Button>
    </Wrapper>
  );
}

export default HomePageBody;
