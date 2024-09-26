import React from "react";
import { StyledBadgeContainer, StyledCircle } from "./statusBadge";

const StatusBadge: React.FC = () => {
  return (
    <StyledBadgeContainer>
      <StyledCircle />
      <span>Active</span>
    </StyledBadgeContainer>
  );
};

export default StatusBadge;
