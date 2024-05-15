/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Login from "../Login/Login";
import Home from "../Home/Home";

const LandingPage = () => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const user = JSON.parse(localStorage.getItem("captify"));
    setUser(user);
    setLoading(false);
  }, []);
  return (
    <div>
      <div className={`${user?.email ? "hidden" : ""}`}>
        <Login></Login>
      </div>
      <div className={`${user?.email ? "" : "hidden"}`}>
        <Home></Home>
      </div>
    </div>
  );
};

export default LandingPage;
