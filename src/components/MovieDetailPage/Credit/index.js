import React, { useState, useEffect, useCallback } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import Button from "../../common/Button";
import CreditItem from "./CreditItem";
import { CreditStyled } from "./styles";

export function Cast({ cast, state }) {
  return <Credit people={cast} state={state} />;
}

export function Crew({ crew, state }) {
  return <Credit people={crew} state={state} />;
}

function Credit({ people, state }) {
  const [render, setRender] = useState(false);
  const [partialItems, setPartialItems] = useState(people.slice(0, 16));

  const onLoadMoreClicK = useCallback(() => {
    if (partialItems.length < people.length) {
      const nextPartialItems = people.slice(0, partialItems.length + 16);
      setPartialItems(nextPartialItems);
    }
  }, [people, partialItems]);

  useEffect(() => {
    if (!render && state !== "hidden") {
      setRender(true);
    }
  }, [state, render]);

  if (!render) return null;

  return (
    <CreditStyled className={state}>
      <div className="content-wrapper">
        {partialItems.map((person, index) => (
          <CreditItem
            key={index}
            imagePath={person.profile_path}
            name={person.name}
            role={person.job || person.character}
          />
        ))}
        {people.length > partialItems.length && (
          <Button
            variant="transparent"
            height="2.5rem"
            onClick={onLoadMoreClicK}
          >
            <MdKeyboardArrowDown size="2rem" />
          </Button>
        )}
      </div>
    </CreditStyled>
  );
}
