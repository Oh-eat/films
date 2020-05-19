import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBrightness, setBackground } from "../reducers/background";
import AboutPageBody from "../components/AboutPage";

function AboutPage() {
  const dispatch = useDispatch();
  const backgroundPath = useSelector(({ background }) => background.path);

  useEffect(() => {
    if (backgroundPath === undefined) {
      dispatch(setBackground({ path: null, brightness: "dark" }));
      return;
    }
    dispatch(setBrightness("dark"));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  return <AboutPageBody />;
}

export default AboutPage;
