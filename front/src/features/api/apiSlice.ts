import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { sendRequest } from "./api";
interface Component {
  product: {
    code: string;
    label: string;
  };
  children: ReadonlyArray<{
    code: string;
    component_identifier: string;
    data: ReadonlyArray<{ id: string; label: string }>;
  }>;
}

interface User {
  id: string;
  ville: string;
  prenom: string;
  nom: string;
  right: string;
}

interface ApiState {
  components: {
    status: "idle" | "loading" | "failed";
    data: ReadonlyArray<Component>;
  };
  users: { status: "idle" | "loading" | "failed"; data: ReadonlyArray<User> };
}

const initialState: ApiState = {
  components: {
    status: "idle",
    data: [],
  },
  users: {
    status: "idle",
    data: [],
  },
};

export const getComponents = createAsyncThunk("api/getComponents", async () => {
  const response = await sendRequest("/components");
  return response.data;
});

export const getUsers = createAsyncThunk("api/getUsers", async () => {
  const response = await sendRequest("/users");
  return response.data;
});

export const apiSlice = createSlice({
  name: "api",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getComponents.pending, (state) => {
        state.components.status = "loading";
      })
      .addCase(getComponents.fulfilled, (state, action) => {
        state.components.status = "idle";
        state.components.data = [...state.components.data, ...action.payload];
      })
      .addCase(getUsers.pending, (state) => {
        state.users.status = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users.status = "idle";
        state.users.data = [...state.users.data, ...action.payload];
      });
  },
});

export const selectUsers = (state: RootState) => state.api.users;
export const selectComponents = (state: RootState) => state.api.components;

export default apiSlice.reducer;
