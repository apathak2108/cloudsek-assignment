import { combineReducers } from "redux";
import homeReducer from "./reducers/homeReducer";

const rootReducer = combineReducers({
  home: homeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;