import { SET_DATA } from "../actionTypes";

export interface SetDataAction {
  type: typeof SET_DATA;
  payload: string;
}

export const setData = (data: string): SetDataAction => ({
  type: SET_DATA,
  payload: data,
});
