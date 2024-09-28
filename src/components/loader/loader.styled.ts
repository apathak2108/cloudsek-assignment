import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const StyledLoader = styled.div`
  border: 8px solid rgba(255, 255, 255, 0.3); 
  border-top: 8px solid #3498db;
  border-radius: 50%
  width: 40px;
  height: 40px;
  animation: ${spin} 1s linear infinite;
  display: inline-block;
`;
