import React from "react";

import * as settings from "../components/TypeTest/settings";

const SettingsContext = React.createContext({
  TestWordsList: settings.defaultSettings.TestWords,
  // Theme
  // Test length
  // Keyboard
  // Language
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
        TestWordsList: settings.defaultSettings.TestWords,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
