import axios from "axios";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  withCredentials:true,
  headers: {
    "Content-type": "application/json",
    Accept: "application/json",
  },
});

export const sendOtp = (data) => api.post("/user/send-otp", data);
export const verifyOtp = (data) => api.post("/user/verify-otp", data);
export const userActivate = (data)=>api.post("/user/activate",data);


// interceptors

api.interceptors.response.use((config)=>{
  return config;
},async(error)=>{
  console.log({error});
  const originalReq = error.config;
  if(error.response.status === 401 && originalReq && !originalReq._isretry){
    originalReq._isretry = true;
    try {
      const res = await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`,{
        withCredentials:true
      });

      console.log(res);
      return  await api.request(originalReq);
    } catch (error) {
      console.log(error);
    }
  }
});

export default api;
