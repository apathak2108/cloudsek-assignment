import styled from "styled-components";

export const StyledSearchContainer = styled.div`
  position: ${({ theme }) => theme.position.relative};
  display: inline-block;
  margin-right: ${({ theme }) => theme.spacing.lg};
  
  @media (max-width: 524px) {
    margin-left: ${({ theme }) => theme.spacing.md};
  }
`;

export const SearchInput = styled.input`
  width: ${({ theme }) => theme.sizes.width.search};
  padding-left: ${({ theme }) => theme.spacing.xl};
  height: ${({ theme }) => theme.sizes.height.search};
  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: ${({ theme }) => theme.borderRadius.small};
  outline: none;

  &::placeholder {
    font-size: ${({theme}) => theme.fontSizes.xxs}
  }
`;

export const StyledSearchIcon = styled.img`
  position: ${({ theme }) => theme.position.absolute};
  left: ${({ theme }) => theme.spacing.sm};
  top: ${({ theme }) => theme.position.top.fiftyPercent};
  width: ${({ theme }) => theme.spacing.md};
  height: ${({ theme }) => theme.spacing.md};
  transform: translateY(-50%);
  pointer-events: none;
`;
