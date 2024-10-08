import React from "react";
import Button from "../button";
import { STRINGS } from "../../constants";
import {
  StyledPaginationButton,
  StyledPaginationButtonsContainer,
  StyledPaginationContainer,
  StyledThreeDots,
} from "./pagination.styled";
import usePagination, { DOTS } from "../../hooks/usePagination";
import { IPaginationProps } from "../../types";

const Pagination: React.FC<IPaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const siblingCount = 1;
  const pageSize = 1;
  const totalCount = totalPages * pageSize;

  const paginationRange = usePagination({
    totalCount,
    pageSize,
    siblingCount,
    currentPage,
  });

  if (totalPages === 0) {
    return null;
  }

  return (
    <StyledPaginationContainer>
      <Button
        name={STRINGS.PREVIOUS}
        disabled={currentPage === 1 || totalPages === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      <StyledPaginationButtonsContainer>
        {paginationRange?.map((page, index) =>
          page === DOTS ? (
            <StyledThreeDots key={index}>{STRINGS.THREE_DOTS}</StyledThreeDots>
          ) : (
            <StyledPaginationButton
              key={index}
              active={currentPage === page}
              onClick={() => onPageChange(Number(page))}
            >
              {page}
            </StyledPaginationButton>
          )
        )}
      </StyledPaginationButtonsContainer>
      <Button
        name={STRINGS.NEXT}
        disabled={currentPage === totalPages || totalPages === 1}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </StyledPaginationContainer>
  );
};

export default Pagination;
