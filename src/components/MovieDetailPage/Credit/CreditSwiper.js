import React, { useState, useCallback, useEffect } from "react";
import Swiper from "react-id-swiper";
import PersonCard from "./PersonCard";
import { MdVerticalAlignBottom } from "react-icons/md";

function CreditSwiper({ people }) {
  const [swiperParams, setSwiperParams] = useState(null);
  const params = {
    ...swiperParams,
    direction: "column",
    // slidesPerColumnFill: "row",
    rebuildOnUpdate: true,
    grabCursor: true,
  };

  const onResize = useCallback(() => {
    const fontSize = Number(
      window
        .getComputedStyle(document.body)
        .getPropertyValue("font-size")
        .match(/\d+/)[0]
    );
    const { innerWidth: width, innerHeight: height } = window;
    const vmin = Math.min(width * 0.02, height * 0.02);
    const spaceBetween = Math.max(fontSize, vmin);
    // const slidesPerColumn = height >= 500 ? 2 : 1;
    // const slidesPerView = width >= 1024 ? 8 : width >= 568 ? 6 : 4;
    const slidesPerView = 1;
    const slidesPerGroup = slidesPerView;
    const slidesPerColumn = 3;
    setSwiperParams({
      spaceBetween,
      slidesPerView,
      slidesPerGroup,
      slidesPerColumn,
    });
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

export default CreditSwiper;
