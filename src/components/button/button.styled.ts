import styled from "styled-components";

export const StyledButton = styled.div<{ disabled: boolean }>`
  box-shadow: 0px 1px 2px 0px #1018280d;
  border: 1px solid #d0d5dd;
  padding: 8px 12px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  pointer-events: ${(props) => (props.disabled ? "none" : "auto")};

  &:hover {
    background-color: #e9e9e9;
  }

  @media (max-width: 624px) {
    padding: 4px 8px;
    font-size: 10px;
    gap: 2px;
  }
`;

export const StyledArrowIcon = styled.img``;
