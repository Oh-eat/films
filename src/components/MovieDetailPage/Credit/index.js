import React, { useState, useCallback, useEffect } from "react";
import Swiper from "react-id-swiper";
import { CreditStyled, PersonCardStyled, CreditSwiperWrapper } from "./styles";
import { buildImageUrl } from "../../../lib/TMDB_API";
import { MdPerson, MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import Button from "../../common/Button";

function Credit({ credit }) {
  console.log(credit);
  return (
    <div>
      <Cast cast={credit.cast} />
      <Crew crew={credit.crew} />
    </div>
  );
}

function Cast({ cast }) {
  return (
    <CreditStyled>
      <h2>출연진</h2>
      <CreditSwiper people={cast} />
    </CreditStyled>
  );
}

function Crew({ crew }) {
  return (
    <CreditStyled>
      <h2>제작진</h2>
      <CreditSwiper people={crew} />
    </CreditStyled>
  );
}

function CreditSwiper({ people }) {
  const [slidesPerView, setSlidesPerView] = useState(7);
  const params = {
    slidesPerView: slidesPerView,
    slidesPerGroup: slidesPerView,
    speed: 450,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    shouldSwiperUpdate: true,
    rebuildOnUpdate: true,
  };

  const onResize = useCallback(() => {
    const width = window.innerWidth;
    const isPortrait = window.matchMedia("(orientation: portrait)").matches;

    if (width >= 1440) {
      setSlidesPerView(9);
    } else if (width >= 1024) {
      setSlidesPerView(7);
    } else if (width < 768 && isPortrait) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(5);
    }
  }, []);

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return (
    <Swiper {...params}>
      {people.map((person, index) => (
        <PersonCard
          key={index}
          imagePath={person.profile_path}
          name={person.name}
          role={person.job || person.character}
        />
      ))}
    </Swiper>
  );
}

function PersonCard({ imagePath, name, role }) {
  return (
    <PersonCardStyled className="swiper-slide">
      {imagePath ? (
        <img src={buildImageUrl(imagePath, 400)} alt="" />
      ) : (
        <div className="placeholder">
          <MdPerson size="80%" />
        </div>
      )}
      <span className="name">{name}</span>
      <span className="role">{role}</span>
    </PersonCardStyled>
  );
}

export default Credit;
