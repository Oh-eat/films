import React from "react";
import { CreditStyled } from "./styles";
import CreditItem from "./CreditItem";

export function Cast({ cast, state }) {
  return (
    <CreditStyled className={state}>
      <div className="content-wrapper">
        {cast.map((person, index) => (
          <CreditItem
            key={index}
            imagePath={person.profile_path}
            name={person.name}
            role={person.job || person.character}
          />
        ))}
      </div>
    </CreditStyled>
  );
}

export function Crew({ crew, state }) {
  return (
    <CreditStyled className={state}>
      <div className="content-wrapper">
        {crew.map((person, index) => (
          <CreditItem
            key={index}
            imagePath={person.profile_path}
            name={person.name}
            role={person.job || person.character}
          />
        ))}
      </div>
    </CreditStyled>
  );
}
