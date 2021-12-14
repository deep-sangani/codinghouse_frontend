const { default: axios } = require("axios");
const { useState, useEffect } = require("react");
const { useDispatch } = require("react-redux");
const { setAuth } = require("../store/user-slice");

exports.useLoadingWithRefresh = ()=>{
  const [loading,setLoading] = useState(true);
  const dispatch =  useDispatch();
  useEffect(() => {
    (async()=>{
      try {
        const {data} =  await axios.get(`${process.env.REACT_APP_API_URL}/user/refresh`,{withCredentials:true});
        console.log("kem cho");
        dispatch(setAuth(data));
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    })();
  }, []);
  return {loading};
};