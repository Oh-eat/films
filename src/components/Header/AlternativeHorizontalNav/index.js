import React, { useState, useCallback } from "react";
import {
  AlternativeHorizontalNavStyled,
  AlternativeNavItemWrapper,
} from "./styles";
import SearchButton from "../../Search/SearchButton";
import sitemap from "../../../lib/sitemap";
import FlexibleNavItem from "./FlexibleNavItem";
import ButtonNavItem from "./ButtonNavItem";

function AlternativeHorizontalNav() {
  const [selected, setSelected] = useState(null);

  const onClick = useCallback((index) => {
    setSelected((state) => (state === index ? null : index));
  }, []);

  return (
    <AlternativeHorizontalNavStyled>
      <SearchButton />
      <AlternativeNavItemWrapper>
        {sitemap.map(({ caption, to, subnavs }, index) =>
          subnavs ? (
            <FlexibleNavItem
              key={index}
              caption={caption}
              subnavs={subnavs}
              selected={index === selected}
              onClick={() => onClick(index)}
            />
          ) : (
            <ButtonNavItem key={index} caption={caption} to={to} />
          )
        )}
      </AlternativeNavItemWrapper>
    </AlternativeHorizontalNavStyled>
  );
}

export default AlternativeHorizontalNav;
