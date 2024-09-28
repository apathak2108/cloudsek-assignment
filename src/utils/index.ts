import { StringMappingType } from "typescript";

// made for capitalizing the first letter of type value
export const capitalizeFirstLetter = (string: string): string => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//debounced function for search queries
export const debounce = (func: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: string[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      func(...args);
    }, delay);
  };
};

//pagination logic
export const generatePageNumbers = (
  totalPages: number,
  currentPage: number
) => {
  const pages: (number | string)[] = [];
  const maxButtons = 5;
  const sidePages = 0;

  if (totalPages <= maxButtons) {
    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }
  } else {
    pages.push(1, 2, 3);
    if (currentPage > sidePages + 10) pages.push("...");
    for (
      let i = Math.max(currentPage - sidePages, 4);
      i <= Math.min(currentPage + sidePages, totalPages - 2);
      i++
    ) {
      pages.push(i);
    }
    if (currentPage < totalPages - sidePages - 6) pages.push("...");

    pages.push(totalPages - 2, totalPages - 1, totalPages);
  }
  if (pages.length === 8 && pages[4] === 11) {
    pages.splice(4, 1);
  }
  return pages;
};

//logic to get total number of pages
export const getTotalPages = (totalUsers: number, limit: number) => {
  const totalPages =
    totalUsers % limit === 0
      ? Math.floor(totalUsers / limit)
      : Math.floor(totalUsers / limit) + 1;
  return totalPages;
};
