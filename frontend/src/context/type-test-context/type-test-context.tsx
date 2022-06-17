import React, { useState } from "react";

import { TypeTestContextValues } from "./type-test-context.interfaces";

const TypeTestContext = React.createContext<TypeTestContextValues | undefined>(
  undefined
);

export const TypeTestContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const [playing, setPlaying] = useState<boolean>(false);
  return (
    <TypeTestContext.Provider
      value={{ playing: playing, setPlaying: setPlaying }}
    >
      {children}
    </TypeTestContext.Provider>
  );
};

export default TypeTestContext;
