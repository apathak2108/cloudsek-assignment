import styled from "styled-components";

export const StyledLayout = styled.main`
  height: ${({ theme }) => theme.sizes.height.full};
  width: ${({ theme }) => theme.sizes.width.full};
`;

export const StyledChildrenContainer = styled.div`
  height: calc(100vh - 138px);
  width: ${({ theme }) => theme.sizes.width.full};
  overflow-y: scroll;
`;
