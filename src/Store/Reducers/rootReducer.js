import { combineReducers } from "redux";
import PostReducer from "./PostReducer";
import HomeReducer from "./HomeReducer";
import UsaDataReducer from './UsaDataReducer';


const rootReducer = combineReducers({
  posts: PostReducer,
  home: HomeReducer,
  usaData:UsaDataReducer
});

export default rootReducer;
