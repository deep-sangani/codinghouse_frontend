import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data) => api.post("/user/send-otp", data);
export const verifyOtp = (data) => api.post("/user/verify-otp", data);

export default api;
