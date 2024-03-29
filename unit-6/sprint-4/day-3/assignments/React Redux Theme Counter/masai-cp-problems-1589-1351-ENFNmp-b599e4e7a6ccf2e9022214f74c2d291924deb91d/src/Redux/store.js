import { combineReducers, legacy_createStore } from "redux";
import { counterReducer } from "../Redux/counterReducer";
import { themeReducer } from "../Redux/themeReducer";
const rootReducer = combineReducers({
  counterReducer,
  themeReducer,
});

export const store = legacy_createStore(rootReducer);
