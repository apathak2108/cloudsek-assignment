import styled from "styled-components";

export const StyledUserCatalogueContainer = styled.article`
  display: flex;
  gap: ${({ theme }) => theme.spacing.smm};
`;

export const StyledProfilePic = styled.img`
  height: 40px;
  width: 40px;
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  border: 0.75px solid ${({ theme }) => theme.colors.black};

  @media (max-width: 768px) {
    margin: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StyledNameAndUsernameContainer = styled.div`
  font-size: ${({ theme }) => theme.fontSizes.sm};
  display: flex;
  flex-flow: column;
`;

export const StyledName = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
`;
