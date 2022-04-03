import React, { useState } from "react";

const SettingsContext = React.createContext({
  settingsModalVisible: false,
  openSettings: (event: React.MouseEvent<HTMLButtonElement>) => {},
  closeSettings: (event: React.MouseEvent<HTMLElement>) => {},
});

interface SettingsProps {
  children: React.ReactNode;
}

export const SettingsContextProvider = ({
  children,
}: SettingsProps): JSX.Element => {
  const [settingsModalVisible, setSettingsModalVisible] = useState(false);

  const openSettings = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSettingsModalVisible(true);
  };

  const closeSettings = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
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
