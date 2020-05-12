import React from "react";
import { LinkButtonStyled, ActionButtonStyled } from "./styles";

function Button({ to, children, variant, className, ...props }) {
  return to ? (
    <LinkButtonStyled
      className={`${variant}${className ? ` ${className}` : ""}`}
      to={to}
      {...props}
    >
      {children}
    </LinkButtonStyled>
  ) : (
    <ActionButtonStyled
      className={`${variant}${className ? ` ${className}` : ""}`}
      {...props}
    >
      {children}
    </ActionButtonStyled>
  );
}

export default Button;
