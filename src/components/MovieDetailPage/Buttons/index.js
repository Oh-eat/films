import React from "react";
import {
  MdHome,
  MdFavorite,
  // eslint-disable-next-line
  MdFavoriteBorder,
  MdBookmark,
  // eslint-disable-next-line
  MdBookmarkBorder,
} from "react-icons/md";
import Button from "../../common/Button";
import { ButtonsStyled } from "./styles";

function Buttons({ homepage }) {
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
      <Button size="1.5rem" variant="transparent circle" color="red">
        <MdFavorite size="1.5rem" />
      </Button>
      {/* <Button size="1.5rem" variant="transparent circle" color="red">
        <MdFavoriteBorder size="1.5rem" />
      </Button> */}
      <Button size="1.5rem" variant="transparent circle" color="yellow">
        <MdBookmark size="1.5rem" />
      </Button>
      {/* <Button size="1.5rem" variant="transparent circle" color="yellow">
        <MdBookmarkBorder size="1.5rem" />
      </Button> */}
    </ButtonsStyled>
  );
}

export default Buttons;
