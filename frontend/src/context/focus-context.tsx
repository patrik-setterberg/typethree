import React, { useState, useEffect, useCallback } from "react";

const FocusContext = React.createContext({
  windowIsFocused: true,
});

interface FocusContextProps {
  children: React.ReactNode;
}

export const FocusContextProvider = ({
  children,
}: FocusContextProps): JSX.Element => {

  const [windowIsFocused, setWindowIsFocused] = useState(true);

  const blurHandler = useCallback(() => {
    console.log('Window blurred.');
    setWindowIsFocused(false);
  }, []);

  const focusHandler = useCallback(() => {
    console.log('Window focused.');
    setWindowIsFocused(true);
  }, []);

  useEffect(() => {
    window.addEventListener("focus", focusHandler);
    window.addEventListener("blur", blurHandler);
    return () => {
      window.removeEventListener("focus", focusHandler);
      window.removeEventListener("blur", blurHandler);
    };
  }, [blurHandler, focusHandler]);

  return (
    <FocusContext.Provider
      value={{
        windowIsFocused: windowIsFocused,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
}

export default FocusContext;