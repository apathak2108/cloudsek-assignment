import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to { transform: rotate(1turn); }
`;

export const StyledLoader = styled.div`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  border: 8px solid lightblue;
  border-right-color: #3498db;
  animation: ${spin} 1s infinite linear;
`;
