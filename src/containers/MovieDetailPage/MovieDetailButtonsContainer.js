import React, { useState, useCallback, useEffect } from "react";
import Buttons from "../../components/MovieDetailPage/Buttons";

function MovieDetailButtonsContainer({ movie, homepage }) {
  const [liked, setLiked] = useState(null);
  const [inWatchlist, setInWatchlist] = useState(null);

  const toggleLiked = useCallback(() => {
    try {
      const like = JSON.parse(localStorage.getItem("like")) || [];
      const liked = like.find((item) => item.id === movie.id);
      const newLikeItem = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      };
      const newLike = JSON.stringify(
        liked
          ? like.filter((item) => item.id !== movie.id)
          : [newLikeItem, ...like]
      );
      localStorage.setItem("like", newLike);
      setLiked(!liked);
    } catch (e) {
      console.error(e);
      alert("작업 처리 중 오류가 발생했습니다.");
    }
  }, [movie]);
  const toggleInWatchlist = useCallback(() => {
    try {
      const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      const inWatchlist = watchlist.find((item) => item.id === movie.id);
      const newWatchlistItem = {
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        backdrop_path: movie.backdrop_path,
      };
      const newWatchlist = JSON.stringify(
        inWatchlist
          ? watchlist.filter((item) => item.id !== movie.id)
          : [newWatchlistItem, ...watchlist]
      );
      localStorage.setItem("watchlist", newWatchlist);
      setInWatchlist(!inWatchlist);
    } catch (e) {
      console.error(e);
      alert("작업 처리 중 오류가 발생했습니다.");
    }
  }, [movie]);

  useEffect(() => {
    try {
      const like = JSON.parse(localStorage.getItem("like")) || [];
      const watchlist = JSON.parse(localStorage.getItem("watchlist")) || [];
      setLiked(!!like.find((item) => item.id === movie.id));
      setInWatchlist(!!watchlist.find((item) => item.id === movie.id));
    } catch (e) {
      console.error(e);
      alert("작업 처리 중 오류가 발생했습니다.");
    }
  }, [movie]);

  if (liked === null || inWatchlist === null) return null;

  return (
    <Buttons
      homepage={homepage}
      liked={liked}
      inWatchlist={inWatchlist}
      toggleLiked={toggleLiked}
      toggleInWatchlist={toggleInWatchlist}
    />
  );
}

export default MovieDetailButtonsContainer;
