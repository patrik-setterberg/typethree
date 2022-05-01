import * as S from "./SettingsItem.styles";
import { SettingsItemProps } from "./SettingsItem.interfaces";
import ToggleSwitch from "../../../components/UI/ToggleSwitch/ToggleSwitch";

const SettingsItem = ({
  togglerId,
  togglerLabel,
  togglerFunc,
  children,
}: SettingsItemProps): JSX.Element => {
  return (
    <S.SettingsItem>
      {children}
      <ToggleSwitch
        Id={togglerId}
        labelText={togglerLabel}
        onChangeFunc={togglerFunc}
      />
    </S.SettingsItem>
  );
};

export default SettingsItem;
