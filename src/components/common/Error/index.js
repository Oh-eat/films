import React, { useCallback } from "react";
import { ErrorStyled } from "./styles";
import { withRouter } from "react-router-dom";
import Button from "../Button";

function Error({ history }) {
  const onClick = useCallback(() => {
    history.goBack();
  }, [history]);
  return (
    <ErrorStyled>
      <strong>에러가 발생했습니다. :(</strong>
      <br />
      <strong>잘못된 접근이 아닌지 확인하시고 잠시 후에 시도해 주세요.</strong>
      <br />
      <Button variant="outlined" onClick={onClick}>
        돌아가기
      </Button>
    </ErrorStyled>
  );
}

export default withRouter(Error);
