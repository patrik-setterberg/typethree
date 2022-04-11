import { useContext } from "react";

import SettingsContext from "../../../../context/settings-context";

import HeaderButton from "../HeaderButton/HeaderButton";
import Gears from "./Gears";

const SettingsButton = (): JSX.Element => {
  const settingsCtx = useContext(SettingsContext);
  const buttonText: string = "Settings";

  return (
    <HeaderButton
      clickFunc={settingsCtx.openSettings}
      title={buttonText}
      ariaLabel={buttonText}
      modalIsOpen={settingsCtx.settingsModalVisible}
    >
      <Gears />
    </HeaderButton>
  );
};

export default SettingsButton;
