import {
  GET_ALL_USERS_DATA_FAILURE,
  GET_ALL_USERS_DATA_REQUEST,
  GET_ALL_USERS_DATA_SUCCESS,
  GET_PAGINATED_USERS_REQUEST,
  GET_PAGINATED_USERS_SUCCESS,
  GET_PAGINATED_USERS_FAILURE,
  SET_FILTERED_USERS,
  SET_IS_USERS_FOUND,
  SET_USER_COUNT,
} from "../actionTypes";
import {
  TAllUsersDataActions,
  TPaginatedUsersActions,
  IUsersState,
} from "../../types";

const initialState: IUsersState = {
  allUsers: [],
  paginatedUsers: [],
  filteredUsers: [],
  userCount: 0,
  loading: false,
  error: null,
  isUsersFound: false,
};

export const usersReducer = (
  state = initialState,
  action: TAllUsersDataActions | TPaginatedUsersActions
) => {
  switch (action.type) {
    case GET_ALL_USERS_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_ALL_USERS_DATA_SUCCESS:
      return {
        ...state,
        allUsers: action.payload,
        loading: false,
      };
    case GET_ALL_USERS_DATA_FAILURE:
      return {
        ...state,
        loading: false,
        allUsers: [],
        error: action.error,
      };
    case GET_PAGINATED_USERS_REQUEST:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case GET_PAGINATED_USERS_SUCCESS:
      return {
        ...state,
        paginatedUsers: action.payload.users,
        loading: false,
      };
    case GET_PAGINATED_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        paginatedUsers: [],
        error: action.error,
      };
    case SET_FILTERED_USERS:
      return {
        ...state,
        filteredUsers: action.payload,
      };
    case SET_IS_USERS_FOUND:
      return {
        ...state,
        isUsersFound: action.payload,
      };
    case SET_USER_COUNT:
      return {
        ...state,
        userCount: action.payload,
      };
    default:
      return state;
  }
};
