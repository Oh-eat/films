import React from "react";
import { sections } from "..";
import { MovieDetailNavStyled, NavItemWrapper, NavItemStyled } from "./styles";

function MovieDetailNav({ availableSections, onClick, now }) {
  return (
    <MovieDetailNavStyled>
      <NavItemWrapper>
        {sections.map((section, index) => (
          <NavItem
            key={index}
            caption={section}
            selected={index === now}
            onClick={() => onClick(index)}
            disabled={!availableSections.includes(section)}
          />
        ))}
      </NavItemWrapper>
    </MovieDetailNavStyled>
  );
}

function NavItem({ caption, selected, disabled, onClick }) {
  return (
    <NavItemStyled
      className={selected ? "selected" : disabled ? "disabled" : ""}
      onClick={disabled ? null : onClick}
    >
      {caption}
    </NavItemStyled>
  );
}

export default MovieDetailNav;
