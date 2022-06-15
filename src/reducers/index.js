import { combineReducers } from "redux";
import listsSurahReducer from "./listSurah";

const reducers = combineReducers({
  listsSurah: listsSurahReducer,
});

export default reducers;
