import React, { useEffect, useCallback, useState } from "react";
import Swiper from "react-id-swiper";
import remToPixel from "../../../lib/remToPixel";
import getVmin from "../../../lib/getVmin";
import SimilarSlide from "./SimilarSlide";
import debounce from "../../../lib/debounce";

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
    const slidesPerView = width >= 1024 ? 6 : width >= 568 ? 4 : 2;
    const slidesPerGroup = slidesPerView;
    setSwiperParams({
      spaceBetween,
      slidesPerView,
      slidesPerGroup,
      // slidesPerColumn,
    });
  }, []);
  const debouncedOnResize = useCallback(debounce(onResize, 100), [onResize]);

  useEffect(() => {
    debouncedOnResize();
    window.addEventListener("resize", debouncedOnResize);
    return () => {
      window.removeEventListener("resize", debouncedOnResize);
    };
  }, [debouncedOnResize]);

  return (
    <Swiper {...params}>
      {similars.map((similar) => (
        <SimilarSlide key={similar.id} similar={similar} />
      ))}
    </Swiper>
  );
}

export default SimilarsSwiper;
