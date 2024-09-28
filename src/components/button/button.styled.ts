import styled from "styled-components";

export const StyledButton = styled.div<{ disabled: boolean }>`
  box-shadow: ${({ theme }) => theme.shadows.small};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.smm};
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${({ theme }) => theme.colors.btnBg};
  }

  @media (max-width: 624px) {
    padding: ${({ theme }) => theme.spacing.xs}
    ${({ theme }) => theme.spacing.sm};
    font-size: ${({ theme }) => theme.fontSizes.xxs}
    gap: ${({ theme }) => theme.spacing.xxs}  }
`;

export const StyledArrowIcon = styled.img``;
