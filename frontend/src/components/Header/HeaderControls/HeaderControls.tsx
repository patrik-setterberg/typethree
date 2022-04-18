import * as S from "./HeaderControls.styles";
import SettingsLink from "./SettingsLink/SettingsLink";
import UserLink from "./UserLink/UserLink";

const HeaderControls = (): JSX.Element => {
  return (
    <S.HeaderControls>
      <UserLink />
      <SettingsLink />
    </S.HeaderControls>
  );
};

export default HeaderControls;
