import * as S from "./HeaderControls.styles";
import UserButton from "./UserButton/UserButton";
import SettingsButton from "./SettingsButton/SettingsButton";

const HeaderControls = (): JSX.Element => {
  return (
    <S.HeaderControls>
      <UserButton />
      <SettingsButton />
    </S.HeaderControls>
  );
}

export default HeaderControls;