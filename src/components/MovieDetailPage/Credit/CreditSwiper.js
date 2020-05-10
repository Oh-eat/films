import React, { useState, useCallback, useEffect } from "react";
import Swiper from "react-id-swiper";
import PersonCard from "./PersonCard";
import remToPixel from "../../../lib/remToPixel";
import getVmin from "../../../lib/getVmin";

function CreditSwiper({ people }) {
  const [swiperParams, setSwiperParams] = useState(null);
  const params = {
    height: 0,
    ...swiperParams,
    // slidesPerColumnFill: "row",
    rebuildOnUpdate: true,
    grabCursor: true,
  };

  const onResize = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    const rem = remToPixel();
    const vmin = getVmin(2);
    const spaceBetween = Math.max(rem, vmin);
    const slidesPerView = 1024 > width && width >= 500 ? 2 : 1;
    const slidesPerColumn = height <= 500 ? 2 : 3;
    const slidesPerGroup = slidesPerView;
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
