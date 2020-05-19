import React, { useState, useCallback, useRef, useEffect } from "react";
import { Helmet } from "react-helmet";
import mergeDetail from "../../lib/mergeDetail";
import { isEmpty } from "../../lib/isEmpty";
import MovieDetailNav from "./MovieDetailNav";
import Introduction from "./Introduction";
import Summary from "./Summary";
import { Cast, Crew } from "./Credit";
import { Posters, Backdrops } from "./Images";
import Videos from "./Videos";
import Similars from "./Similars";
import { OuterSectionWrapper, InnerSectionWrapper, Wrapper } from "./styles";

export const sections = [
  "소개",
  "줄거리",
  "출연진",
  "제작진",
  "포스터",
  "배경",
  "비디오",
  "비슷한 영화",
];

function AlternativeMovieDetailPageBody({
  detailKR,
  detailEN,
  images,
  videos,
  credit,
  similars,
}) {
  const detail = useRef(mergeDetail(detailKR, detailEN));
  const [availableSections, setAvailableSections] = useState(null);
  const [display, setDisplay] = useState({
    now: 0,
    prev: null,
    from: "initial",
    to: null,
  });

  const onNavClick = useCallback(
    (index) => {
      const { now } = display;
      if (now === index) return;
      setDisplay({
        now: index,
        prev: now,
        from: index > now ? "from-right" : "from-left",
        to: index > now ? "to-left" : "to-right",
      });
    },
    [display]
  );
  const getState = useCallback(
    (index) => {
      const { now, prev, from, to } = display;
      if (now === index) return from;
      else if (prev === index) return to;
      else return "hidden";
    },
    [display]
  );

  useEffect(() => {
    const arr = [];
    arr.push("소개");
    if (!isEmpty(detail.current.overview)) arr.push("줄거리");
    if (!isEmpty(credit.cast)) arr.push("출연진");
    if (!isEmpty(credit.crew)) arr.push("제작진");
    if (!isEmpty(images.posters)) arr.push("포스터");
    if (!isEmpty(images.backdrops)) arr.push("배경");
    if (!isEmpty(videos)) arr.push("비디오");
    if (!isEmpty(similars)) arr.push("비슷한 영화");
    setAvailableSections(arr);
  }, [images, videos, credit, similars]);

  if (!availableSections) return null;

  return (
    <Wrapper>
      <Helmet>
        <title>{detail.current.title}</title>
      </Helmet>
      <MovieDetailNav
        availableSections={availableSections}
        onClick={onNavClick}
        now={display.now}
      />
      <OuterSectionWrapper>
        <InnerSectionWrapper>
          <Introduction detail={detail.current} state={getState(0)} />
          <Summary
            tagline={detail.current.tagline}
            overview={detail.current.overview}
            state={getState(1)}
          />
          <Cast cast={credit.cast} state={getState(2)} />
          <Crew crew={credit.crew} state={getState(3)} />
          <Posters posters={images.posters} state={getState(4)} />
          <Backdrops backdrops={images.backdrops} state={getState(5)} />
          <Videos
            videos={videos}
            state={getState(6)}
            stopPlaying={display.now !== 6}
          />
          <Similars similars={similars} state={getState(7)} />
        </InnerSectionWrapper>
      </OuterSectionWrapper>
    </Wrapper>
  );
}

export default AlternativeMovieDetailPageBody;
