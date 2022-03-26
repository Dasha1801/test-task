import { combineReducers } from "@reduxjs/toolkit";
import { sort_reducer } from "./slices/sortSlice";

const rootReducer = combineReducers({
  sort: sort_reducer,
});

export default rootReducer;
