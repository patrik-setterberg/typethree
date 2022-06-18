import React, { useContext, useEffect, useState } from "react";

import { TypeTestContextValues } from "./type-test-context.interfaces";

import useSettingsContext from "../../hooks/useSettingsContext";
import WindowContext from "../window-context";

const TypeTestContext = React.createContext<TypeTestContextValues | undefined>(
  undefined
);

export const TypeTestContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const settingsCtx = useSettingsContext();
  const WindowCtx = useContext(WindowContext);

  const [playing, setPlaying] = useState<boolean>(false);
  const [timeLeft, setTimeLeft] = useState<number>(settingsCtx.TestLength);

  // Timer for test duration countdown.
  useEffect(() => {
    let timerInterval: ReturnType<typeof setInterval>;

    if (playing && WindowCtx.windowIsFocused) {
      /**
       * Runs a clock which decreases timeLeft by 1 every second.
       * Timer clears if document loses focus. Restarts when focus is regained.
       * BAD SOLUTION:
       * Drifts - These "seconds" are slightly longer than normal seconds, about ~1s over 30s
       * Inaccurate / bad because it gives a < 1s leeway when regaining focus.
       * FIX A BETTER TIMER AND TIME HANDLING STRATEGY
       */
      timerInterval = setInterval((): void => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [playing, WindowCtx.windowIsFocused, timeLeft]);

  // End test when timer reaches zero.
  useEffect((): void => {
    if (timeLeft <= 0) setPlaying(false);
  }, [timeLeft]);

  return (
    <TypeTestContext.Provider
      value={{ playing: playing, setPlaying: setPlaying, timeLeft: timeLeft, setTimeLeft: setTimeLeft }}
    >
      {children}
    </TypeTestContext.Provider>
  );
};

export default TypeTestContext;
