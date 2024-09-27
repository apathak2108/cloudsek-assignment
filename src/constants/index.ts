export const STRINGS = {
  MAIN_HEADING: "Team Members",
  USERS: "users",
  SEARCH_PLACEHOLDER: "Search by employee name",
  SEARCH_ICON_ALT: "search-icon",
  LEFT_ARROW_ALT: "left-arrow-icon",
  RIGHT_ARROW_ALT: "right-arrow-icon",
  PREVIOUS: "Previous",
  NEXT: "Next",
  PROFILE_PIC: "profile-pic",
  ACTIVE: "Active",
  INACTIVE: "Inactive",
  NO_USERS_MSG: "No users found",
} as const;

export const URL = {
  SEARCH_ICON:
    "https://img.icons8.com/?size=20&id=82875&format=png&color=646669",
  LEFT_ARROW_ICON:
    "https://img.icons8.com/?size=20&id=PXS7hSwrozS5&format=png&color=000000",
  RIGHT_ARROW_ICON:
    "https://img.icons8.com/?size=20&id=NuNhPTZDW3yY&format=png&color=000000",
};

export const TABLE_HEADINGS = [
  "Name",
  "Status",
  "Role",
  "Email Address",
  "Teams",
];

export const API_URL = "https://retoolapi.dev/zhj0vN/data";

export type TeamName = "Design" | "Engineering" | "Product" | "Marketing";

export const TEAM_STYLES: Record<
  TeamName | "default",
  { color: string; backgroundColor: string; borderColor: string }
> = {
  Design: {
    color: "#6941C6",
    backgroundColor: "#F9F5FF",
    borderColor: "#E9D7FE",
  },
  Engineering: {
    color: "#3538CD",
    backgroundColor: "#EEF4FF",
    borderColor: "#C7D7FE",
  },
  Product: {
    color: "#175CD3",
    backgroundColor: "#EFF8FF",
    borderColor: "#B2DDFF",
  },
  Marketing: {
    color: "#594139",
    backgroundColor: "#EFEBE9",
    borderColor: "#B9ABA5",
  },
  default: {
    color: "#6941C6",
    backgroundColor: "#F9F5FF",
    borderColor: "#E4E7EC",
  },
};

export type StringsType = typeof STRINGS;
