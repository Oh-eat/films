import React from "react";
import MyMoviesPageBodyContainer from "./MyMoviesPageBodyContainer";

function LikePageBodyContainer({ currentPage }) {
  return <MyMoviesPageBodyContainer type="like" currentPage={currentPage} />;
}

export default LikePageBodyContainer;
