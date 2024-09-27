import styled from "styled-components";

export const StyledPaginationContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width.full};
  padding: 0 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 476px) {
    padding: 0 8px;
  }
`;

export const StyledPaginationButtonsContainer = styled.section`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (max-width: 476px) {
    gap: ${({ theme }) => theme.spacing.xxs};
  }
`;

export const StyledPaginationButton = styled.button<{ active: boolean }>`
  border-radius: ${({ theme }) => theme.borderRadius.medium};
  width: ${({ theme }) => theme.sizes.width.btnWidth};
  height: ${({ theme }) => theme.sizes.height.btnHeight};
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ active, theme }) =>
    active ? theme.colors.gray : theme.colors.white};
  color: ${({ active, theme }) =>
    active ? theme.colors.white : theme.colors.black};
  font-weight: ${({ active, theme }) =>
    active ? theme.fontWeights.medium : theme.fontWeights.regular};
  margin: 0 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.border : theme.colors.disabled};
  }

  @media (max-width: 624px) {
    height: 24px;
    width: 24px;
    margin: 0 2px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const StyledThreeDots = styled.span`
  width: ${({ theme }) => theme.sizes.width.btnWidth};
  height: ${({ theme }) => theme.sizes.height.btnHeight};
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 624px) {
    margin: 0;
  }
`;
