import * as S from "./HeaderControls.styles";
import UserButton from "./UserButton/UserButton";
import SettingsLink from "./SettingsLink/SettingsLink";

const HeaderControls = (): JSX.Element => {
  return (
    <S.HeaderControls>
      <UserButton />
      <SettingsLink />
    </S.HeaderControls>
  );
}

export default HeaderControls;