import { configureStore } from "@reduxjs/toolkit";
import auth from "./user-slice";

export const store = configureStore({
  reducer: { auth },
});
