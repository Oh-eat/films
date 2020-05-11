import React from "react";
import { MdPerson } from "react-icons/md";
import { CreditSlideStyled } from "./styles";
import { buildImageUrl } from "../../../lib/TMDB_API";

function CreditSlide({ imagePath, name, role }) {
  return (
    <CreditSlideStyled className="swiper-slide">
      {imagePath ? (
        <img src={buildImageUrl(imagePath, 200)} alt="" />
      ) : (
        <div className="placeholder">
          <MdPerson size="80%" />
        </div>
      )}
      <div className="info">
        <span className="name">{name}</span>
        <span className="role">{role}</span>
      </div>
    </CreditSlideStyled>
  );
}

export default CreditSlide;
