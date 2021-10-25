import { RootState } from "./../store";
import { ResponseUser } from "./../../utils/api/types";
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  data: ResponseUser | null;
}

const initialState: UserState = {
  data: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action: PayloadAction<ResponseUser>) => {
      state.data = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState) => state.user.data;

export const userReducer = userSlice.reducer;
