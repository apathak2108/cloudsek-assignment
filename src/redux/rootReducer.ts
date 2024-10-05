import { combineReducers } from "redux";
import { usersReducer } from "./reducers/usersReducer";

const rootReducer = combineReducers({
  user: usersReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;