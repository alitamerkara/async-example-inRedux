import { configureStore } from "@reduxjs/toolkit";
import { ApiReducer } from "./ApiSlice";

export const store = configureStore({
  reducer: {
    api: ApiReducer,
  },
});
