import React, { useState, useCallback, useEffect } from "react";
import { buildImageUrl } from "../../../lib/TMDB_API";
import Swiper from "react-id-swiper";
import remToPixel from "../../../lib/remToPixel";
import getVmin from "../../../lib/getVmin";

function PostersSwiper({ posters }) {
  const [swiperParams, setSwiperParams] = useState(null);
  const params = {
    ...swiperParams,
    slidesPerColumnFill: "row",
    grabCursor: true,
    rebuildOnUpdate: true,
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
      {posters.map((poster, index) => (
        <div key={index} className="swiper-slide click-action">
          <a href="https://www.naver.com">
            <img
              src={buildImageUrl(poster.file_path, 500)}
              alt=""
              style={{ height: "auto", width: "100%" }}
            />
          </a>
        </div>
      ))}
    </Swiper>
  );
}

export default PostersSwiper;
