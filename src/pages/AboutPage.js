import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setBrightness } from "../reducers/background";

function AboutPage(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setBrightness("dark"));
  }, [dispatch]);

  return <div>About</div>;
}

export default AboutPage;
