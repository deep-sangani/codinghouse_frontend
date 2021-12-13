import { configureStore } from "@reduxjs/toolkit";
import auth from "./user-slice";
import activate from "./activate-slice";
export const store = configureStore({
  reducer: { auth,activate },
});
