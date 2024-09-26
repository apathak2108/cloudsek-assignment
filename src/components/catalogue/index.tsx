import React from "react";
import {
  StyledNameAndUsernameContainer,
  StyledProfilePic,
  StyledUserCatalogueContainer,
} from "./catalogue.styled";

const UserCatalogue: React.FC = () => {
  return (
    <StyledUserCatalogueContainer>
      <StyledProfilePic src="https://logo.clearbit.com/vistaprint.com" alt="" />
      <StyledNameAndUsernameContainer>
        <span>Ananya Pathak</span>
        <span>@ananya</span>
      </StyledNameAndUsernameContainer>
    </StyledUserCatalogueContainer>
  );
};

export default UserCatalogue;
