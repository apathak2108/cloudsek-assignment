import styled from "styled-components";

export const StyledTableContainer = styled.div`
  width: ${({ theme }) => theme.sizes.width.full};
  min-width: 700px;
`;

export const StyledTable = styled.table`
  width: ${({ theme }) => theme.sizes.width.full};
  border-collapse: collapse;
`;

export const StyledTableHead = styled.thead`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.white};
  text-align: left;
`;

export const StyledTableRow = styled.tr<{ active: boolean }>`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  &:nth-of-type(odd) {
    background-color: ${({ active, theme }) =>
      active ? theme.colors.rowGreyBg : theme.colors.disabled};
  }
  opacity: ${({ active, theme }) =>
    active ? theme.opacity.full : theme.opacity.medium};
  &:last-child td {
    border: none;
  }
`;

export const StyledTableCell = styled.td`
  padding: ${({ theme }) => theme.spacing.mmd}
    ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: left;

  @media (max-width: 768px) {
    padding: ${({ theme }) => theme.spacing.sm};
  }
`;

export const StyledTableCellForBadge = styled(StyledTableCell)`
  display: flex;
  flex-wrap: wrap;
  min-width: 200px;
  gap: ${({ theme }) => theme.spacing.xs};
`;

export const StyledTableHeader = styled.th`
  padding: ${({ theme }) => theme.spacing.smm}
    ${({ theme }) => theme.spacing.md};
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  position: ${({ theme }) => theme.position.sticky};
  top: 0;
  z-index: 10;
`;

export const LoaderWrapper = styled.div`
  position: ${({ theme }) => theme.position.absolute};
  top: ${({ theme }) => theme.position.top.fiftyPercent};
  left: ${({ theme }) => theme.position.top.fiftyPercent};
  transform: translate(-50%, -50%);
`;
