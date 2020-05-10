import React from "react";
import { MdPerson } from "react-icons/md";
import { PersonCardStyled } from "./styles";
import { buildImageUrl } from "../../../lib/TMDB_API";

function PersonCard({ imagePath, name, role }) {
  return (
    <PersonCardStyled className="swiper-slide">
      {imagePath ? (
        <img src={buildImageUrl(imagePath, 300)} alt="" />
      ) : (
        <div className="placeholder">
          <MdPerson size="80%" />
        </div>
      )}
      <div className="info">
        <span className="name">{name}</span>
        <span className="role">{role}</span>
      </div>
    </PersonCardStyled>
  );
}

export default PersonCard;
