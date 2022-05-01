import * as S from "./SettingsCategory.styles";
import { SettingsCategoryProps } from "./SettingsCategory.interfaces";

const SettingsCategory = ({
  title,
  children,
}: SettingsCategoryProps): JSX.Element => {
  return (
    <S.SettingsCategory>
      <S.SettingsCategoryTitle>{title}</S.SettingsCategoryTitle>
      <S.SettingsList>{children}</S.SettingsList>
    </S.SettingsCategory>
  );
};

export default SettingsCategory;
