import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isAuth: false,
  otp: {
    phoneno: "",
    hash: "",
  },
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
  
    // eslint-disable-next-line no-unused-vars
    setAuth: (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
    },
    setOtp: (state, action) => {
      const { hash, phoneno } = action.payload;
      state.otp.hash = hash;
      state.otp.phoneno = phoneno;
    },
  },
});

export const { setAuth, setOtp } = authSlice.actions;
export default authSlice.reducer;
