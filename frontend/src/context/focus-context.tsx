import React, { useState, useEffect, useCallback } from "react";

import debounce from "../util/debounce";

const FocusContext = React.createContext({
  windowIsFocused: true,
  windowWidth: window.innerWidth,
});

interface FocusContextProps {
  children: React.ReactNode;
}

export const FocusContextProvider = ({
  children,
}: FocusContextProps): JSX.Element => {
  const [windowIsFocused, setWindowIsFocused] = useState(true);

  const blurHandler = useCallback(() => {
    setWindowIsFocused(false);
  }, []);

  const focusHandler = useCallback(() => {
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

  const [windowWidth, setWindowWidth] = useState<number>(window.innerWidth);

  useEffect((): (() => void) => {
    const debouncedHandleResize = debounce(function handleResize() {
      setWindowWidth(window.innerWidth);
    }, 50);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  return (
    <FocusContext.Provider
      value={{
        windowIsFocused: windowIsFocused,
        windowWidth: windowWidth,
      }}
    >
      {children}
    </FocusContext.Provider>
  );
};

export default FocusContext;
