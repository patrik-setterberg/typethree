import React, { useState } from "react";

const AuthContext = React.createContext({
  // temp
  isLoggedIn: false,
});

interface AuthContextProps {
  children: React.ReactNode;
}

export const AuthContextProvider = ({
  children,
}: AuthContextProps): JSX.Element => {

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: true,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
