import React from "react";
import { StyledBadgeContainer } from "./badge.styled";

interface BadgeProps {
  value: string;
}

const Badge: React.FC<BadgeProps> = ({ value }) => {
  return <StyledBadgeContainer team={value}>{value}</StyledBadgeContainer>;
};

export default Badge;
