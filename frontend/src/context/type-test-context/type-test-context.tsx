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
  const [testInProgress, setTestInProgress] = useState<boolean>(false);
  const [testConcluded, setTestConcluded] = useState<boolean>(false);

  return (
    <TypeTestContext.Provider
      value={{
        testInProgress: testInProgress,
        setTestInProgress: setTestInProgress,
        testConcluded: testConcluded,
        setTestConcluded: setTestConcluded,
      }}
    >
      {children}
    </TypeTestContext.Provider>
  );
};

export default TypeTestContext;
