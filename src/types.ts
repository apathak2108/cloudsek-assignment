import {
  GET_ALL_USERS_DATA_FAILURE,
  GET_ALL_USERS_DATA_REQUEST,
  GET_ALL_USERS_DATA_SUCCESS,
  GET_PAGINATED_USERS_FAILURE,
  GET_PAGINATED_USERS_REQUEST,
  GET_PAGINATED_USERS_SUCCESS,
  SET_FILTERED_USERS,
  SET_IS_USERS_FOUND,
  SET_USER_COUNT,
} from "./redux/actionTypes";

export interface IUser {
  id: number;
  role: string;
  email: string;
  teams: string[];
  active: boolean;
  last_name: string;
  first_name: string;
  profile_picture: string;
}

interface IGetAllUsersDataRequest {
  type: typeof GET_ALL_USERS_DATA_REQUEST;
}

interface IGetAllUsersDataSuccess {
  type: typeof GET_ALL_USERS_DATA_SUCCESS;
  payload: IUser[];
}

interface IGetAllUsersDataFailure {
  type: typeof GET_ALL_USERS_DATA_FAILURE;
  error: string;
}

interface ISetIsUsersFound {
  type: typeof SET_IS_USERS_FOUND;
  payload: boolean;
}

interface ISetUsersCount {
  type: typeof SET_USER_COUNT;
  payload: number;
}

export type TAllUsersDataActions =
  | IGetAllUsersDataRequest
  | IGetAllUsersDataSuccess
  | IGetAllUsersDataFailure
  | ISetIsUsersFound
  | ISetUsersCount
  | ISetFilteredUsers;

interface IGetPaginatedUsersRequest {
  type: typeof GET_PAGINATED_USERS_REQUEST;
}

interface ISetFilteredUsers {
  type: typeof SET_FILTERED_USERS;
  payload: IUser[];
}

interface IGetPaginatedUsersSuccess {
  type: typeof GET_PAGINATED_USERS_SUCCESS;
  payload: {
    users: IUser[];
    page: number;
    limit: number;
  };
}

interface IGetPaginatedUsersFailure {
  type: typeof GET_PAGINATED_USERS_FAILURE;
  error: string;
}

export type TPaginatedUsersActions =
  | IGetPaginatedUsersRequest
  | IGetPaginatedUsersSuccess
  | IGetPaginatedUsersFailure;

export interface IUsersState {
  allUsers: IUser[];
  paginatedUsers: IUser[];
  filteredUsers: IUser[];
  userCount: number;
  loading: boolean;
  error: string | null;
  isUsersFound: boolean;
}

export interface IPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}
