import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import HomeReducer from "./HomeReducer";

const rootReducer = combineReducers({
  posts: PostReducer,
  home: HomeReducer
});

export default rootReducer;
