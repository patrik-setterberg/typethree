import React, { createContext, useState } from "react";
import {
  DefaultSettingsValues,
  SettingsContextValues,
} from "./settings-context.interfaces";

const defaultSettings: DefaultSettingsValues = {
  TestWords: "eng1k",
  ShowKeyboard: true,
  KeyboardLayout: "QWERTY_US",
};

const SettingsContext = createContext<SettingsContextValues | undefined>(
  undefined
);

export const SettingsContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  // Check if user is logged in and has preferences, if so set provider's values to them.
  // If not logged in, check if there's a cookie with preferences and use those.
  // Else use defautSettings.

  const [showKeyboard, setShowKeyboard] = useState<boolean>(
    defaultSettings.ShowKeyboard
  );

  const [keyboardLayout, setKeyboardLayout] = useState<string>(
    defaultSettings.KeyboardLayout
  );

  return (
    <SettingsContext.Provider
      value={{
        TestWords: defaultSettings.TestWords,
        ShowKeyboard: showKeyboard,
        setShowKeyboard: setShowKeyboard,
        KeyboardLayout: keyboardLayout,
        setKeyboardLayout: setKeyboardLayout,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
