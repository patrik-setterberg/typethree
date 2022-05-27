import { useContext } from "react";

import SettingsContext from "../context/settings-context/settings-context";

// Custom SettingsContext consumer to allow creation of empty context (<context | undefined>).
const useSettingsContext = () => {
  const context = useContext(SettingsContext);

  if (!context) {
    throw new Error(`Context: ${context} not found.`);
  }
  return context;
}

export default useSettingsContext;