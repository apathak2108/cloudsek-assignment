import React from "react";
import { StyledBadgeContainer, StyledCircle } from "./statusBadge";
import { STRINGS } from "../../constants";

interface StatusBadgeProps {
  status: boolean;
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  return (
    <StyledBadgeContainer>
      <StyledCircle status={status} />
      <span>{status ? STRINGS.ACTIVE : STRINGS.INACTIVE}</span>
    </StyledBadgeContainer>
  );
};

export default StatusBadge;
