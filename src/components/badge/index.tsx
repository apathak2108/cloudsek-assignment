import React from "react";
import { StyledBadgeContainer } from "./badge.styled";

interface BadgeProps {
  value: string | number;
}

const Badge: React.FC<BadgeProps> = ({ value }) => {
  return <StyledBadgeContainer>{value}</StyledBadgeContainer>;
};

export default Badge;
