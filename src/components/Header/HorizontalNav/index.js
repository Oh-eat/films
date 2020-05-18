import React, { useState, useCallback, useEffect } from "react";
import sitemap from "../../../lib/sitemap";
import SearchButton from "../../Search/SearchButton";
import FlexibleNavItem from "./FlexibleNavItem";
import ButtonNavItem from "./ButtonNavItem";
import { HorizontalNavStyled, NavItemWrapper } from "./styles";
import { withRouter } from "react-router-dom";

function HorizontalNav({ location }) {
  const [selected, setSelected] = useState(null);

  const onClick = useCallback((index) => {
    setSelected((state) => (state === index ? null : index));
  }, []);

  useEffect(() => {
    setSelected(null);
  }, [location]);

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

export default withRouter(HorizontalNav);
