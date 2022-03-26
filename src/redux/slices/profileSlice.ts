import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserCard } from "../../components/shared/interfaces";

interface IProfileState {
  profile: IUserCard;
}

const initialState: IProfileState = {
  profile: {
    id: 0,
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      city: "",
      zipcode: "",
    },
    phone: "",
    website: "",
    company: {
      name: "",
    },
  },
};

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    getProfile: (state, { payload }: PayloadAction<IUserCard>) => {
      state.profile = payload;
    },
  },
});

export const profile_reducer = profileSlice.reducer;
export const { getProfile } = profileSlice.actions;
