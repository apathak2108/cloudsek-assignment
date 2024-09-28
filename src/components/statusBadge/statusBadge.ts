import styled from "styled-components";

export const StyledBadgeContainer = styled.div`
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.spacing.sm};
  border: 1px solid #d0d5dd;
  display: flex;
  gap: ${({ theme }) => theme.spacing.xs};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.fontSizes.lg};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  align-items: center;
  width: fit-content;
`;

export const StyledCircle = styled.div<{ status: boolean }>`
  height: ${({ theme }) => theme.spacing.sm};
  width: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.rounded};
  background-color: ${({ status, theme }) =>
    status ? theme.colors.secondary : theme.colors.gray};
`;
