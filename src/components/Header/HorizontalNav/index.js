import React, { useState, useCallback } from "react";
import { HorizontalNavStyled, NavItemWrapper } from "./styles";
import SearchButton from "../../Search/SearchButton";
import sitemap from "../../../lib/sitemap";
import FlexibleNavItem from "./FlexibleNavItem";
import ButtonNavItem from "./ButtonNavItem";

function HorizontalNav() {
  const [selected, setSelected] = useState(null);

  const onClick = useCallback((index) => {
    setSelected((state) => (state === index ? null : index));
  }, []);

  return (
    <HorizontalNavStyled>
      <SearchButton />
      <NavItemWrapper>
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
      </NavItemWrapper>
    </HorizontalNavStyled>
  );
}

export default HorizontalNav;
