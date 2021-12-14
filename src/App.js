import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import "./App.css";
import { Navigation } from "./components/shared/Navigation/Navigation";
import { Activate } from "./pages/Activate/Activate";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Register } from "./pages/Register/Register";
import { Rooms } from "./pages/Rooms/Rooms";
import {useSelector} from "react-redux";
import { useLoadingWithRefresh } from "./hooks/useLoadingWithRefresh";

function App() {
  const {loading} = useLoadingWithRefresh();
  // call refresh endpoint
  return loading?("Loading"):
    (
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/register" element={<Register />} exact />
          <Route path="/authenticate" element={<GuestRoute />} />
          <Route path="/rooms" element={<ActivateRoute />} exact />
        </Routes>
      </BrowserRouter>
    );
}

const GuestRoute = () => {
  const {isAuth} = useSelector((state)=>state.auth);
  return isAuth ? <Navigate to="/rooms" /> : <Login />;
};

const ActivateRoute = () => {
  const {isAuth,user} = useSelector((state)=>state.auth);
  return !isAuth ? (
    <Login />
  ) : isAuth && user.activated ? (
    <Rooms />
  ) : (
    <Activate />
  );
};

export default App;
