import styled from "styled-components";

export const StyledBadgeContainer = styled.span`
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ theme }) => theme.colors.purple};
  opacity: ${({ theme }) => theme.opacity.low};
  color: ${({ theme }) => theme.colors.purple};
`;
