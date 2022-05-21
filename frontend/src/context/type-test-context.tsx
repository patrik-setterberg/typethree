import React from "react";

const TypeTestContext = React.createContext({});

interface TypeTestContextProps {
  children: React.ReactNode;
}

export const TypeTestContextProvider = ({
  children,
}: TypeTestContextProps): JSX.Element => {
  return (
    <TypeTestContext.Provider value={{

    }}>
      {children}
    </TypeTestContext.Provider>
  )
};

export default TypeTestContext;
