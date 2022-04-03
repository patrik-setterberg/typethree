import * as S from "./Header.styles";
import SettingsButton from "./SettingsButton";
import { SettingsContextProvider } from "../../context/settings-context";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  return (
    <SettingsContextProvider>
      <S.Header>
        <div>type|three</div>

        <SettingsButton />
      </S.Header>
    </SettingsContextProvider>
  );
};

export default Header;
