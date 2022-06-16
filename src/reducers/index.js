import { combineReducers } from "redux";
import { listsSurahReducer, getDetailSurah } from "./listSurah";

const reducers = combineReducers({
  listsSurah: listsSurahReducer,
  detailSurah: getDetailSurah,
});

export default reducers;
