import React, { useEffect, useState } from "react";
import Button from "../button";
import { STRINGS } from "../../constants";
import {
  StyledPaginationButton,
  StyledPaginationButtonsContainer,
  StyledPaginationContainer,
  StyledThreeDots,
} from "./pagination.styled";
import { generatePageNumbers } from "../../utils";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pages, setPages] = useState<(number | string)[]>([]);
  useEffect(() => {
    const generatedPages = generatePageNumbers(totalPages, currentPage);
    setPages(generatedPages);
  }, [totalPages, currentPage]);

  return (
    <StyledPaginationContainer>
      <Button
        name={STRINGS.PREVIOUS}
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      />
      <StyledPaginationButtonsContainer>
        {pages?.map((page, index) =>
          typeof page === "number" ? (
            <StyledPaginationButton
              key={index}
              active={currentPage === page}
              onClick={() => onPageChange(page)}
            >
              {page}
            </StyledPaginationButton>
          ) : (
            <StyledThreeDots key={index}>{STRINGS.THREE_DOTS}</StyledThreeDots>
          )
        )}
      </StyledPaginationButtonsContainer>
      <Button
        name={STRINGS.NEXT}
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      />
    </StyledPaginationContainer>
  );
};

export default Pagination;
