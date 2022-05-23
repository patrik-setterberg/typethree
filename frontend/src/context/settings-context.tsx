import React from "react";

const defaultSettings: {
  TestWords: string;
  ShowKeyboard: boolean;
  KeyboardLayout: string;
} = {
  TestWords: "eng1k",
  ShowKeyboard: true,
  KeyboardLayout: "QWERTY_US",
};

const SettingsContext = React.createContext({
  // SITE PREFERENCES //
  // Theme
  // TYPE TEST PREFERENCES //
  TestWords: defaultSettings.TestWords,
  // Test length
  ShowKeyboard: defaultSettings.ShowKeyboard,
  KeyboardLayout: defaultSettings.KeyboardLayout,
  // ??
  // More!
});

interface SettingsContextProps {
  children: React.ReactNode;
}

export const SettingsContextProvider = ({
  children,
}: SettingsContextProps): JSX.Element => {
  // Check if user is logged in and has preferences, if so set provider's values to them.

  return (
    <SettingsContext.Provider
      value={{
        TestWords: defaultSettings.TestWords,
        ShowKeyboard: defaultSettings.ShowKeyboard,
        KeyboardLayout: defaultSettings.KeyboardLayout,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
