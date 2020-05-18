import React from "react";
import { MdPerson } from "react-icons/md";
import { buildImageUrl } from "../../../lib/TMDB_API";
import Image from "../../common/Image";
import { CreditItemStyled } from "./styles";

function CreditItem({ imagePath, name, role }) {
  return (
    <CreditItemStyled>
      {imagePath ? (
        <div className="image">
          <Image src={buildImageUrl(imagePath, 200)} basis="height" />
        </div>
      ) : (
        <div className="placeholder">
          <MdPerson size="100%" />
        </div>
      )}
      <div className="info">
        <span className="font-bold">{name}</span>
        <span className="font-light">{role}</span>
      </div>
    </CreditItemStyled>
  );
}

export default CreditItem;
