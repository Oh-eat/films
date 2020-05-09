import React from "react";
import { PostersStyled, BackdropsStyled } from "./styles";
import { isEmpty } from "../../../lib/isEmpty";
import BackdropsSwiper from "./BackdropsSwiper";
import PostersSwiper from "./PostersSwiper";
import NoContent from "../NoContent";

function Images({ images }) {
  console.log(images);
  return (
    <>
      <Backdrops backdrops={images.backdrops} />
      <Posters posters={images.posters} />
    </>
  );
}

function Posters({ posters }) {
  return (
    <PostersStyled>
      <h2>포스터</h2>
      {isEmpty(posters) ? (
        <NoContent>등록된 포스터가 없습니다.</NoContent>
      ) : (
        <PostersSwiper posters={posters} />
      )}
    </PostersStyled>
  );
}

function Backdrops({ backdrops }) {
  return (
    <BackdropsStyled>
      <h2>배경</h2>
      {isEmpty(backdrops) ? (
        <NoContent>등록된 배경이 없습니다.</NoContent>
      ) : (
        <BackdropsSwiper backdrops={backdrops} />
      )}
    </BackdropsStyled>
  );
}

export default Images;
