import React from "react";
import { MovieDetailNavStyled, NavItemWrapper, NavItemStyled } from "./styles";
import { isEmpty } from "../../../lib/isEmpty";

function MovieDetailNav({
  detail,
  images,
  videos,
  credit,
  similars,
  onClick,
  selected,
}) {
  return (
    <MovieDetailNavStyled>
      {/* <span>{detail.title}</span> */}
      <NavItemWrapper>
        <NavItem caption="소개" onClick={() => onClick(0)} />
        <NavItem
          caption="줄거리"
          selected={selected === 0}
          empty={isEmpty(detail.overview)}
          onClick={() => onClick(1)}
        />
        <NavItem
          caption="출연진"
          empty={isEmpty(credit.cast)}
          onClick={() => onClick(2)}
        />
        <NavItem
          caption="제작진"
          empty={isEmpty(credit.crew)}
          onClick={() => onClick(3)}
        />
        <NavItem
          caption="포스터"
          empty={isEmpty(images.posters)}
          onClick={() => onClick(4)}
        />
        <NavItem
          caption="배경"
          empty={isEmpty(images.backdrops)}
          onClick={() => onClick(5)}
        />
        <NavItem
          caption="비디오"
          empty={isEmpty(videos)}
          onClick={() => onClick(6)}
        />
        <NavItem
          caption="비슷한 작품"
          empty={isEmpty(similars)}
          onClick={() => onClick(7)}
        />
      </NavItemWrapper>
    </MovieDetailNavStyled>
  );
}

function NavItem({ empty, caption, onClick }) {
  return (
    <NavItemStyled className={empty ? "empty" : ""} onClick={onClick}>
      {caption}
    </NavItemStyled>
  );
}

export default MovieDetailNav;
