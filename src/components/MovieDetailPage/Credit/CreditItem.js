import React from "react";
import { MdPerson } from "react-icons/md";
import { CreditItemStyled } from "./styles";
import { buildImageUrl } from "../../../lib/TMDB_API";
import Image from "../../common/Image";

function CreditItem({ imagePath, name, role }) {
  return (
    <CreditItemStyled>
      {imagePath ? (
        <div className="image">
          <Image src={buildImageUrl(imagePath, 200)} basis="height" />
        </div>
      ) : (
        // <img src={buildImageUrl(imagePath, 200)} alt="" />
        <div className="placeholder">
          <MdPerson size="80%" />
        </div>
      )}
      <div className="info">
        <span className="name">{name}</span>
        <span className="role">{role}</span>
      </div>
    </CreditItemStyled>
  );
}

export default CreditItem;
