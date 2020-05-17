import React from "react";
import Poster from "./Poster";
import Title from "./Title";
import Info from "./Info";
import { IntroductionStyled } from "./styles";
import MovieDetailButtonsContainer from "../../../containers/MovieDetailPage/MovieDetailButtonsContainer";

function Introduction({ detail, state }) {
  return (
    <IntroductionStyled className={state}>
      <div className="content-wrapper">
        <div className="poster-title">
          {detail.poster_path && <Poster posterPath={detail.poster_path} />}
          <div className="title-info">
            <Title
              title={detail.title}
              originalTitle={detail.original_title}
              year={new Date(detail.release_date).getFullYear()}
            />
            <MovieDetailButtonsContainer
              movie={detail}
              homepage={detail.homepage}
            />
            <div className="info-under-title">
              <Info detail={detail} />
            </div>
          </div>
        </div>
        <div className="info-fluid">
          <Info detail={detail} />
        </div>
      </div>
    </IntroductionStyled>
  );
}

export default Introduction;
