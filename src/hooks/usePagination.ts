export const DOTS = "...";

const range = (start: number, end: number): number[] => {
  let length = end - start + 1;
  return Array.from({ length }, (_, index) => index + start);
};

interface UsePaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: UsePaginationProps): (number | string)[] => {
  const totalPageCount = Math.ceil(totalCount / pageSize);
  const totalPageNumbers = siblingCount + 5;

  if (totalPageNumbers >= totalPageCount) {
    return range(1, totalPageCount);
  }

  const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
  const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

  const shouldShowLeftDots = leftSiblingIndex > 2;
  const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

  const firstPageIndex = 1;
  const lastPageIndex = totalPageCount;

  if (currentPage === 10) {
    return [firstPageIndex, DOTS, 9, 10, 11, 12, 13];
  }

  if (!shouldShowLeftDots && shouldShowRightDots) {
    let leftRange = range(1, 3);
    return [...leftRange, DOTS, totalPageCount - 2, totalPageCount - 1, lastPageIndex];
  }

  if (shouldShowLeftDots && !shouldShowRightDots) {
    let rightRange = range(totalPageCount - 2, totalPageCount);
    return [firstPageIndex, DOTS, ...rightRange];
  }

  if (shouldShowLeftDots && shouldShowRightDots) {
    let middleRange = range(leftSiblingIndex, rightSiblingIndex);

    if (currentPage <= 3) {
      return [firstPageIndex, ...range(2, 3), DOTS, totalPageCount - 2, totalPageCount - 1, lastPageIndex];
    } else if (currentPage >= totalPageCount - 3) {
      return [firstPageIndex, DOTS, totalPageCount - 2, totalPageCount - 1, lastPageIndex];
    }

    return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex];
  }

  return [];
};

export default usePagination;
