import { LIMIT } from "../constants";

// made for capitalizing the first letter of type value
export const capitalizeFirstLetter = (string: string): string => {
  if (!string) return string;
  return string.charAt(0).toUpperCase() + string.slice(1);
};

//debounced function for search queries
export const debounce = (callback: (...args: any[]) => void, delay: number) => {
  let timeoutId: NodeJS.Timeout;

  return (...args: string[]) => {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
};

//logic to get total number of pages
export const getTotalPages = (totalUsers: number, limit: number) => {
  const totalPages =
    Math.ceil(totalUsers / LIMIT);
  return totalPages;
};

//special case to handle unique users
export const mergeUniqueUsers = (firstNameUsers: any[], lastNameUsers: any[]) => {
  const mergedUsers = [...firstNameUsers, ...lastNameUsers].reduce(
    (acc: Record<number, any>, user: any) => {
      acc[user.id] = user;
      return acc;
    },
    {}
  );

  return Object.values(mergedUsers);
};
