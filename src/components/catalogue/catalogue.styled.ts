import styled from "styled-components";

export const StyledUserCatalogueContainer = styled.article`
  display: flex;
  gap: 12px;
`;

export const StyledProfilePic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  border: 0.75px solid #000;

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StyledNameAndUsernameContainer = styled.div`
  font-size: 14px;
  display: flex;
  flex-flow: column;
`;

export const StyledName = styled.span`
  font-weight: 500;
`;
