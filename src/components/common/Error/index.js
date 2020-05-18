import React, { useCallback } from "react";
import { withRouter } from "react-router-dom";
import Button from "../Button";
import { ErrorStyled } from "./styles";

function Error({ history }) {
  const onClick = useCallback(() => {
    history.goBack();
  }, [history]);

  return (
    <ErrorStyled>
      <span className="emoticon">(×_×)</span>
      <strong>에러가 발생했습니다.</strong>
      <strong>인터넷 상태가 원활한지 또는 </strong>
      <strong>잘못된 접근이 아닌지 확인하시고</strong>
      <strong>잠시 후에 다시 시도해 주세요.</strong>
      <br />
      <Button variant="outlined" onClick={onClick}>
        돌아가기
      </Button>
    </ErrorStyled>
  );
}

export default withRouter(Error);
