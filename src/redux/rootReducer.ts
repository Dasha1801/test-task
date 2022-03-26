import { combineReducers } from "@reduxjs/toolkit";
import { profile_reducer } from "./slices/profileSlice";
import { sort_reducer } from "./slices/sortSlice";

const rootReducer = combineReducers({
  sort: sort_reducer,
  profile: profile_reducer,
});

export default rootReducer;
