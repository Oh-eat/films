import React, { useEffect, useCallback, useState } from "react";
import Swiper from "react-id-swiper";
import remToPixel from "../../../lib/remToPixel";
import getVmin from "../../../lib/getVmin";
import SimilarItem from "./SimilarItem";

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

  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, [onResize]);

  return (
    <Swiper {...params}>
      {similars.map((similar) => (
        <SimilarItem key={similar.id} similar={similar} />
      ))}
    </Swiper>
  );
}

export default SimilarsSwiper;
