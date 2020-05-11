import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { initializeState } from "../../reducers/zoom";
import { buildImageUrl } from "../../lib/TMDB_API";
import Image from "../common/Image";
import { ZoomStyled, Wrapper } from "./styles";
import { withRouter } from "react-router-dom";

function Zoom({ match }) {
  const dispatch = useDispatch();
  const { path, visible } = useSelector(({ zoom }) => zoom);

  const onClick = useCallback(() => {
    dispatch(initializeState());
  }, [dispatch]);

  useEffect(() => {
    dispatch(initializeState());
  }, [dispatch, match]);

  if (!visible) return null;

  return (
    <ZoomStyled onClick={onClick}>
      <Wrapper>
        <Image
          objectFit="contain"
          basis="width"
          src={buildImageUrl(path, "original")}
        />
      </Wrapper>
    </ZoomStyled>
  );
}

export default withRouter(Zoom);
