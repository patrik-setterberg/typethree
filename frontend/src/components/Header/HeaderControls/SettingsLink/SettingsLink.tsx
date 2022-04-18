import HeaderControlsLink from "../HeaderControlsLink/HeaderControlsLink";
import Gears from "./Gears";

const SettingsLink = () => {
  return (
    <HeaderControlsLink linkTo="/settings" title="Settings">
      <Gears />
    </HeaderControlsLink>
  );
};

export default SettingsLink;
