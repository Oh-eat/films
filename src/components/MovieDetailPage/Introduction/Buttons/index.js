import React, { useCallback, useRef, useEffect } from "react";
import {
  MdHome,
  MdFavorite,
  MdFavoriteBorder,
  MdBookmark,
  MdBookmarkBorder,
} from "react-icons/md";
import Button from "../../../common/Button";
import { ButtonsStyled } from "./styles";

function Buttons({
  homepage,
  liked,
  inWatchlist,
  toggleLiked,
  toggleInWatchlist,
}) {
  const likeTimeoutRef = useRef(null);
  const watchlistTimeoutRef = useRef(null);

  const onLikeClick = useCallback(() => {
    const button = document.activeElement;
    button.blur();
    button.focus();
    toggleLiked();
    clearTimeout(likeTimeoutRef.current);
    likeTimeoutRef.current = setTimeout(() => button.blur(), 1000);
  }, [toggleLiked]);
  const onWatchlistClick = useCallback(() => {
    const button = document.activeElement;
    button.blur();
    button.focus();
    toggleInWatchlist();
    clearTimeout(watchlistTimeoutRef.current);
    watchlistTimeoutRef.current = setTimeout(() => button.blur(), 1000);
  }, [toggleInWatchlist]);

  useEffect(() => {
    return () => {
      clearTimeout(likeTimeoutRef.current);
      clearTimeout(watchlistTimeoutRef.current);
    };
  }, []);

  return (
    <ButtonsStyled>
      {homepage && (
        <Button size="1.5rem" variant="transparent circle" color="blue">
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            alt="homepage"
          >
            <MdHome size="1.5rem" />
          </a>
        </Button>
      )}
      <Button
        className="like"
        size="1.5rem"
        variant="transparent circle"
        color="red"
        onClick={onLikeClick}
      >
        {liked ? (
          <MdFavorite size="1.5rem" />
        ) : (
          <MdFavoriteBorder size="1.5rem" />
        )}
      </Button>
      <Button
        className="watchlist"
        size="1.5rem"
        variant="transparent circle"
        color="yellow"
        onClick={onWatchlistClick}
      >
        {inWatchlist ? (
          <MdBookmark size="1.5rem" />
        ) : (
          <MdBookmarkBorder size="1.5rem" />
        )}
      </Button>
    </ButtonsStyled>
  );
}

export default Buttons;
