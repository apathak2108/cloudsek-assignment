import styled from "styled-components";

export const StyledHeaderContainer = styled.header`
  height: ${({ theme }) => theme.sizes.height.header};
  width: ${({ theme }) => theme.sizes.width.full};
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledHeaderInnerLeftContainer = styled.section`
  gap: ${({ theme }) => theme.spacing.sm};
  margin-left: ${({ theme }) => theme.spacing.lg};
  display: flex;
  align-items: center;

  @media (max-width: 624px) {
    margin-left: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StyledHeaderInnerRightContainer = styled.section`
  margin-right: ${({ theme }) => theme.spacing.lg};

  @media (max-width: 624px) {
    margin-right: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StyledHeading = styled.span`
  font-size: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.bold};

  @media (max-width: 624px) {
    font-size: ${({ theme }) => theme.fontSizes.md};
  }
`;
