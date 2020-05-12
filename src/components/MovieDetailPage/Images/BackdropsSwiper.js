import React, { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import Swiper from "react-id-swiper";
import remToPixel from "../../../lib/remToPixel";
import getVmin from "../../../lib/getVmin";
import { showZoom } from "../../../reducers/zoom";
import ImagesSlide from "./ImagesSlide";
import useDebounce from "../../../lib/useDebounce";

function BackdropsSwiper({ backdrops }) {
  const dispatch = useDispatch();
  const [swiperParams, setSwiperParams] = useState(null);
  const params = {
    ...swiperParams,
    slidesPerColumnFill: "row",
    grabCursor: true,
    rebuildOnUpdate: true,
  };

  const onResize = useCallback(() => {
    const { innerWidth: width, innerHeight: height } = window;
    const rem = remToPixel();
    const vmin = getVmin(2);
    const spaceBetween = Math.max(rem, vmin);
    const slidesPerColumn = height >= 500 ? 2 : 1;
    const slidesPerView = width >= 1024 ? 3 : width <= 567 ? 1 : 2;
    const slidesPerGroup = slidesPerView;
    setSwiperParams({
      spaceBetween,
      slidesPerView,
      slidesPerGroup,
      slidesPerColumn,
    });
  }, []);
  const [debouncedOnResize, timer] = useDebounce(onResize, 100);
  const onClick = useCallback(
    (path) => {
      dispatch(showZoom(path));
    },
    [dispatch]
  );

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
      {backdrops.map((backdrop, index) => (
        <ImagesSlide
          key={index}
          type="backdrop"
          image={backdrop}
          onClick={onClick}
        />
      ))}
    </Swiper>
  );
}

export default BackdropsSwiper;
