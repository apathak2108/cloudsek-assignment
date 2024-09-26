import React from "react";
import { StyledFooterContainer } from "./footer.styled";
import Button from "../button";
import { STRINGS } from "../../constants";
import StatusBadge from "../statusBadge";
import UserCatalogue from "../catalogue";

const Footer: React.FC = () => {
  return (
    <StyledFooterContainer>
      <Button name={STRINGS.PREVIOUS} />
      <Button name={STRINGS.NEXT} />
      <UserCatalogue />
      <StatusBadge />
    </StyledFooterContainer>
  );
};

export default Footer;
