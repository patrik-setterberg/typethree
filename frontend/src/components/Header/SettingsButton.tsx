import { useContext } from "react";

import HeaderButton from "../UI/HeaderButton/HeaderButton";
import Gears from "./Gears";
import Modal from "../../components/UI/Modal";

import SettingsContext from "../../context/settings-context";

const SettingsButton = (): JSX.Element => {

  const settingsCtx = useContext(SettingsContext);

  const buttonText: string = "Settings";

  return (
    <>
    <HeaderButton
      clickFunc={settingsCtx.openSettings}
      title={buttonText}
      ariaLabel={buttonText}
    >
      <Gears />
    </HeaderButton>
    {settingsCtx.settingsModalVisible && <Modal onClose={settingsCtx.closeSettings}>Modal!</Modal>}
    </>
  );
};

export default SettingsButton;
