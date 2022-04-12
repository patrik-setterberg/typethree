import React, { useState } from "react";

const SettingsContext = React.createContext({
  settingsModalVisible: false,
  openSettings: () => {},
  closeSettings: () => {},
  // Theme
  // Test length
  // ??
});

interface SettingsContextProps {
  children: React.ReactNode;
}

export const SettingsContextProvider = ({
  children,
}: SettingsContextProps): JSX.Element => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const openSettings = () => {
    setSettingsModalVisible(true);
  };

  const closeSettings = () => {
    setSettingsModalVisible(false);
  };

  return (
    <SettingsContext.Provider
      value={{
        settingsModalVisible: settingsModalVisible,
        openSettings: openSettings,
        closeSettings: closeSettings,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};

export default SettingsContext;
