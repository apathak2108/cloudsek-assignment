import styled from "styled-components";

export const StyledBadgeContainer = styled.div`
  padding: 2px 6px;
  border-radius: 6px;
  border: 1px solid #d0d5dd;
  display: flex;
  gap: 4px;
  font-size: 12px;
  line-height: 18px;
  font-weight: 500;
  align-items: center;
  width: fit-content;
`;

export const StyledCircle = styled.div<{ status: boolean }>`
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: ${({ status }) => (status ? "#17B26A" : "grey")};
`;
