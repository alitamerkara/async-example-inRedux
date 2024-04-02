import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await axios.get("http://localhost:3000/users");
  return response.data;
});

const ApiSlice = createSlice({
  name: "api",
  initialState: {
    datas: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      (state.loading = true), (state.error = "");
    });
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      (state.datas = action.payload),
        (state.loading = false),
        (state.error = "");
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      (state.loading = false), (state.error = "error!");
    });
  },
});

// export const {  } = ApiSlice.actions;
export const ApiReducer = ApiSlice.reducer;
