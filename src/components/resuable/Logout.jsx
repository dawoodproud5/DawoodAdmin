import React, { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("token");
    window.location.replace("/");
  }, []);
  return null;
};

export default Logout;
