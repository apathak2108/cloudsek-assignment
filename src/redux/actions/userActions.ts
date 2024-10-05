import axios from "axios";
import { API_URL } from "../../constants";
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
import { Dispatch } from "redux";
import {
  TPaginatedUsersActions,
  IUser,
  TAllUsersDataActions,
} from "../../types";

export const getAllUsersData = () => {
  return async (dispatch: Dispatch<TAllUsersDataActions>) => {
    dispatch({ type: GET_ALL_USERS_DATA_REQUEST });

    try {
      const response = await axios.get(API_URL);
      const data: IUser[] = response.data;

      dispatch({
        type: GET_ALL_USERS_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_ALL_USERS_DATA_FAILURE,
        error: (error as Error).message,
      });
    }
  };
};

export const getPaginatedUsers = (page: number, limit: number) => {
  return async (dispatch: Dispatch<TPaginatedUsersActions>) => {
    dispatch({ type: GET_PAGINATED_USERS_REQUEST });

    try {
      const response = await axios.get<IUser[]>(
        `${API_URL}?_page=${page}&_limit=${limit}`
      );
      const users: IUser[] = response.data;
      const total = users.length;

      dispatch({
        type: GET_PAGINATED_USERS_SUCCESS,
        payload: {
          users,
          total: total,
          page: page,
          limit: limit,
        },
      });
    } catch (error) {
      dispatch({
        type: GET_PAGINATED_USERS_FAILURE,
        error: (error as Error).message,
      });
    }
  };
};

export const setFilteredUsers = (filteredUsers: IUser[]) => ({
  type: SET_FILTERED_USERS,
  payload: filteredUsers,
});

export const setIsUsersFound = (state: boolean) => ({
  type: SET_IS_USERS_FOUND,
  payload: state,
});

export const setUserCount = (count: number) => ({
  type: SET_USER_COUNT,
  payload: count,
});
