import { SetDataAction } from "../actions/homeActions";
import { SET_DATA } from "../actionTypes";

interface HomeState {
  data: string;
  loading: boolean;
}

const initialState: HomeState = {
  data: "",
  loading: false,
};

const homeReducer = (
  state = initialState,
  action: SetDataAction
): HomeState => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};

export default homeReducer;
