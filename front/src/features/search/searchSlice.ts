import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export interface searchState {
  value: string;
}

const initialState: searchState = {
  value: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    inputChange: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { inputChange } = searchSlice.actions;

export const selectSearchValue = (state: RootState) => state.search.value;

export default searchSlice.reducer;
