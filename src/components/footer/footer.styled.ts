import styled from "styled-components";

export const StyledFooterContainer = styled.footer`
  height: ${({ theme }) => theme.sizes.height.footer};
  width: ${({ theme }) => theme.sizes.width.full};
  border-top: 1px solid ${({ theme }) => theme.colors.border}; 
  display: flex;
  align-items: center;
  justify-content: center;
`;
