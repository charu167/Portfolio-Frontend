import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const AuthContext = createContext(0);

export const AuthContextProvider = ({ children }) => {
  const location = useLocation();

  useEffect(() => {
    console.log(`location changed to ${location.pathname}`);
  }, [location]);

  return <AuthContext.Provider value={555}>{children}</AuthContext.Provider>;
};

export default AuthContext;
