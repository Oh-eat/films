import React, { useEffect, useState, useRef } from "react";
import { HomePageBodyStyled, Wrapper } from "./styles";
import Button from "../common/Button";
import FullscreenBackground from "../common/FullscreenBackground";
import {
  fetchNowPlayingMovies,
  buildImageUrl,
  fetchMovieDetail,
} from "../../lib/TMDB_API";
import pickRandomMovie from "../../lib/pickRandomMovie";

function HomePageBody() {
  const [movie, setMovie] = useState(null);
  const loading = useRef(false);

  useEffect(() => {
    loading.current = true;
    const fetchMovie = async () => {
      const movies = await fetchNowPlayingMovies();
      const movie = pickRandomMovie(movies);
      const movieDetail = await fetchMovieDetail(movie.id);
      loading.current = false;
      setMovie(movieDetail);
    };
    fetchMovie();
  }, []);

  if (!movie || loading.current) return null;

  return (
    <HomePageBodyStyled>
      <FullscreenBackground
        imagePath={buildImageUrl(movie.backdrop_path, "original")}
      />
      <Wrapper>
        <h2>{movie.title}</h2>
        <p>
          <em>{movie.tagline}</em>
        </p>
        <Button
          fontSize="min(4vw, 4vh)"
          variant="outlined"
          to={`/movie/${movie.id}`}
        >
          더 보기
        </Button>
      </Wrapper>
    </HomePageBodyStyled>
  );
}

export default HomePageBody;
