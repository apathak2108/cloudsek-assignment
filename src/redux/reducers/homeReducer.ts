import { AnyAction } from "redux";
import { SetDataAction } from "../actions/homeActions";
import {
  GET_USERS_DATA_FAILURE,
  GET_USERS_DATA_REQUEST,
  GET_USERS_DATA_SUCCESS,
  GET_USERS_COUNT_FAILURE,
  GET_USERS_COUNT_REQUEST,
  GET_USERS_COUNT_SUCCESS,
  GET_SEARCHED_USER_REQUEST,
  GET_SEARCHED_USER_SUCCESS,
  GET_SEARCHED_USER_FAILURE,
} from "../actionTypes";

interface HomeState {
  users: any;
  loading: boolean;
  error: string;
  count: number;
}

const initialState: HomeState = {
  users: [],
  count: 0,
  loading: false,
  error: "",
};

const homeReducer = (
  state = initialState,
  action: SetDataAction | AnyAction
): HomeState => {
  switch (action.type) {
    case GET_USERS_DATA_REQUEST:
    case GET_SEARCHED_USER_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_DATA_SUCCESS:
    case GET_SEARCHED_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case GET_USERS_DATA_FAILURE:
    case GET_SEARCHED_USER_FAILURE: 
      return {
        ...state,
        loading: false,
        error: action.error,
        users: [],
      };
    case GET_USERS_COUNT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case GET_USERS_COUNT_SUCCESS:
      return {
        ...state,
        loading: false,
        count: action.payload,
        error: "",
      };
    case GET_USERS_COUNT_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    default:
      return state;
  }
};

export default homeReducer;
