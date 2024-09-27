import styled from "styled-components";
import { TEAM_STYLES, TeamName } from "../../constants";

export const StyledBadgeContainer = styled.span<{ team: string }>`
  padding: ${({ theme }) => theme.spacing.xxs}
    ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.large};
  background-color: ${({ team }) =>
    TEAM_STYLES[team as TeamName]?.backgroundColor ||
    TEAM_STYLES.default.backgroundColor};
  border: 1px solid
    ${({ team }) =>
      TEAM_STYLES[team as TeamName]?.borderColor ||
      TEAM_STYLES.default.borderColor};
  color: ${({ team }) =>
    TEAM_STYLES[team as TeamName]?.color || TEAM_STYLES.default.color};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  line-height: ${({ theme }) => theme.spacing.mmd};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  max-width: fit-content;
  display: flex;
  align-items: center;
`;
