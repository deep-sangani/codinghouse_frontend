import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name:"",
  avatar:""
};

export const activateSlice = createSlice({
  name: "activate",
  initialState,
  reducers: {
  
    // eslint-disable-next-line no-unused-vars
    setName: (state, action) => {
      state.name = action.payload;
    },
    setAvatar: (state, action) => {
    
      state.avatar = action.payload;
     
    },
  },
});

export const { setAvatar,setName } = activateSlice.actions;
export default activateSlice.reducer;
