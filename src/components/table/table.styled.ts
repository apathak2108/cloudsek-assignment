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

export const StyledTableRow = styled.tr`
  border-top: 1px solid ${({ theme }) => theme.colors.border};
  &:nth-of-type(odd) {
    background-color: ${({ theme }) => theme.colors.rowGreyBg};
  }

  &:last-child td {
    border: none;
  }
`;

export const StyledTableCell = styled.td`
  padding: 18px 16px;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  text-align: left;
`;

export const StyledTableHeader = styled.th`
  padding: 12px 16px;
  font-size: 14px;
  font-weight: 500;
  background-color: white;
  color: #000;
  position: sticky;
  top: 0;
  z-index: 10;
`;
