import axios from "axios";
import { API_URL, STRINGS } from "../../constants";
import {
  GET_SEARCHED_USER_FAILURE,
  GET_SEARCHED_USER_REQUEST,
  GET_SEARCHED_USER_SUCCESS,
  GET_USERS_COUNT_FAILURE,
  GET_USERS_COUNT_REQUEST,
  GET_USERS_COUNT_SUCCESS,
  GET_USERS_DATA_FAILURE,
  GET_USERS_DATA_REQUEST,
  GET_USERS_DATA_SUCCESS,
  SET_DATA,
} from "../actionTypes";
import { Dispatch } from "redux";
import { capitalizeFirstLetter, mergeUniqueUsers } from "../../utils";

export interface SetDataAction {
  type: typeof SET_DATA;
  payload: string;
  error: string;
}

export const getUsersTotalCount = () => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GET_USERS_COUNT_REQUEST,
    });

    try {
      const response = await axios.get(API_URL);
      const count = response.data.length;

      dispatch({
        type: GET_USERS_COUNT_SUCCESS,
        payload: count,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_COUNT_FAILURE,
        error: (error as any).message,
      });
    }
  };
};

export const getUsersData = (page: number | string, limit: number): any => {
  return async (dispatch: Dispatch) => {
    dispatch({
      type: GET_USERS_DATA_REQUEST,
    });

    try {
      const GET_USERS_DATA_URL = `${API_URL}?_page=${page}&_limit=${limit}`;
      const response = await axios.get(GET_USERS_DATA_URL);
      const data = response.data;

      dispatch({
        type: GET_USERS_DATA_SUCCESS,
        payload: data,
      });
    } catch (error) {
      dispatch({
        type: GET_USERS_DATA_FAILURE,
        error: (error as any).message,
      });
    }
  };
};

export const searchUsers = (
  query: string,
  page: number | string,
  limit: number
) => {
  return async (dispatch: Dispatch) => {
    if (query.trim() === STRINGS.EMPTY_STRING) {
      dispatch({ type: GET_SEARCHED_USER_REQUEST });
      return dispatch(getUsersData(page, limit));
    } else if (query.length > 2) {
      try {
        dispatch({ type: GET_SEARCHED_USER_REQUEST });

        const firstNamePromise = axios.get(
          `${API_URL}?_limit=${limit}&first_name=${capitalizeFirstLetter(
            query
          )}`
        );
        const lastNamePromise = axios.get(
          `${API_URL}?_limit=${limit}&last_name=${capitalizeFirstLetter(query)}`
        );

        const result = await Promise.all([firstNamePromise, lastNamePromise]);

        const firstNameUsers = result?.[0]?.data || [];
        const lastNameUsers = result?.[1]?.data || [];

        const uniqueUsers = mergeUniqueUsers(firstNameUsers, lastNameUsers);

        if (uniqueUsers.length > 0) {
          dispatch({
            type: GET_SEARCHED_USER_SUCCESS,
            payload: uniqueUsers,
          });
        } else {
          dispatch({
            type: GET_SEARCHED_USER_FAILURE,
            error: "No users found",
          });
        }
      } catch (error) {
        dispatch({
          type: GET_USERS_DATA_FAILURE,
          error: (error as any).message,
        });
      }
    }
  };
};
