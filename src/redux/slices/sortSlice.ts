import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ISortState {
  sort: string;
}

const initialState: ISortState = {
  sort: "",
};

const sortSlice = createSlice({
  name: "sort",
  initialState,
  reducers: {
    changeSorting: (state, { payload }: PayloadAction<string>) => {
      state.sort = payload;
    },
  },
});

export const sort_reducer = sortSlice.reducer;
export const { changeSorting } = sortSlice.actions;
