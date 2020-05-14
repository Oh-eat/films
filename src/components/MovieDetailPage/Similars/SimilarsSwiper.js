import React, { useEffect, useCallback, useState } from "react";
import Swiper from "react-id-swiper";
import remToPixel from "../../../lib/remToPixel";
import getVmin from "../../../lib/getVmin";
import SimilarSlide from "./SimilarSlide";
import useDebounce from "../../../lib/useDebounce";

function SimilarsSwiper({ similars }) {
  const [swiperParams, setSwiperParams] = useState(null);
  const params = {
    ...swiperParams,
    rebuildOnUpdate: true,
    grabCursor: true,
  };

  const onResize = useCallback(() => {
    const { innerWidth: width } = window;
    const rem = remToPixel();
    const vmin = getVmin(2);
    const spaceBetween = Math.max(rem, vmin);
    // const slidesPerColumn = height >= 500 ? 2 : 1;
    const slidesPerView = width >= 1280 ? 5 : width >= 568 ? 4 : 2;
    const slidesPerGroup = slidesPerView;
    setSwiperParams({
      spaceBetween,
      slidesPerView,
      slidesPerGroup,
      // slidesPerColumn,
    });
  }, []);
  const [debouncedOnResize, timer] = useDebounce(onResize, 100);

  useEffect(() => {
    debouncedOnResize();
    window.addEventListener("resize", debouncedOnResize);
    return () => {
      window.removeEventListener("resize", debouncedOnResize);
      // eslint-disable-next-line react-hooks/exhaustive-deps
      clearTimeout(timer.current);
    };
  }, [debouncedOnResize, timer]);

  return (
    <Swiper {...params}>
      {similars.map((similar) => (
        <SimilarSlide key={similar.id} similar={similar} />
      ))}
    </Swiper>
  );
}

export default SimilarsSwiper;
