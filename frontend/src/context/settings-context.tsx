import React from "react";

const SettingsContext = React.createContext({
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

  return (
    <SettingsContext.Provider
      value={{
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
