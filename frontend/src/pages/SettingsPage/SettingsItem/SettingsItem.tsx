import * as S from "./SettingsItem.styles";
import { SettingsItemProps } from "./SettingsItem.interfaces";

const SettingsItem = ({
  children,
}: SettingsItemProps): JSX.Element => {
  return (
    <S.SettingsItem>
      {children}
    </S.SettingsItem>
  );
};

export default SettingsItem;
