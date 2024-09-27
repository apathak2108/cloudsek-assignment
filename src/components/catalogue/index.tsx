import React from "react";
import {
  StyledName,
  StyledNameAndUsernameContainer,
  StyledProfilePic,
  StyledUserCatalogueContainer,
} from "./catalogue.styled";
import { STRINGS } from "../../constants";

interface UserCatalogueProps {
  name: string;
  username: string;
  image: string;
}

const UserCatalogue: React.FC<UserCatalogueProps> = ({
  name,
  username,
  image,
}) => {
  return (
    <StyledUserCatalogueContainer>
      <StyledProfilePic src={image} alt={STRINGS.PROFILE_PIC} />
      <StyledNameAndUsernameContainer>
        <StyledName>{name}</StyledName>
        <span>{username}</span>
      </StyledNameAndUsernameContainer>
    </StyledUserCatalogueContainer>
  );
};

export default UserCatalogue;
