import React from "react";
import { StyledArrowIcon, StyledButton } from "./button.styled";
import { STRINGS, URL } from "../../constants";

interface ButtonProps {
  name: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ name, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      {name === STRINGS.PREVIOUS && (
        <>
          <StyledArrowIcon
            src={URL.LEFT_ARROW_ICON}
            alt={STRINGS.LEFT_ARROW_ALT}
          />
          <span>{name}</span>
        </>
      )}
      {name === STRINGS.NEXT && (
        <>
          <span>{name}</span>
          <StyledArrowIcon
            src={URL.RIGHT_ARROW_ICON}
            alt={STRINGS.RIGHT_ARROW_ALT}
          />
        </>
      )}
    </StyledButton>
  );
};

export default Button;
