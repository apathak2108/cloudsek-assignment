import React, { useEffect, useState } from "react";
import { StyledArrowIcon, StyledButton } from "./button.styled";
import { STRINGS, URL } from "../../constants";

interface ButtonProps {
  name: string;
  onClick?: () => void;
  disabled: boolean;
}

const Button: React.FC<ButtonProps> = ({ name, onClick, disabled }) => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth < 544);
    };

    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => window.removeEventListener("resize", checkScreenWidth);
  }, []);
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {name === STRINGS.PREVIOUS && (
        <>
          <StyledArrowIcon
            src={URL.LEFT_ARROW_ICON}
            alt={STRINGS.LEFT_ARROW_ALT}
          />
          {!isSmallScreen && <span>{name}</span>}
        </>
      )}
      {name === STRINGS.NEXT && (
        <>
          {!isSmallScreen && <span>{name}</span>}
          <StyledArrowIcon
            src={URL.RIGHT_ARROW_ICON}
            alt={STRINGS.RIGHT_ARROW_ALT}
          />
        </>
      )}
      {name !== STRINGS.PREVIOUS && name !== STRINGS.NEXT && !isSmallScreen && (
        <span>{name}</span>
      )}
    </StyledButton>
  );
};

export default Button;
