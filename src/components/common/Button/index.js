import React from "react";
import { LinkButtonStyled, ActionButtonStyled } from "./styles";

function Button({ to, children, variant, ...props }) {
  return to ? (
    <LinkButtonStyled className={variant} to={to} {...props}>
      {children}
    </LinkButtonStyled>
  ) : (
    <ActionButtonStyled className={variant} {...props}>
      {children}
    </ActionButtonStyled>
  );
}

export default Button;
