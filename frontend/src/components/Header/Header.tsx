import * as StyledComponents from "./Header.styles";
import Container  from "../UI/Container.styles";
import HeaderMessage from "./HeaderMessage/HeaderMessage";
import SettingsButton from "./SettingsButton";
import UserButton from "./UserButton";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const S = {...StyledComponents, Container};

  return (
    <S.Header>
      <S.Container>
        <div>type|three</div>
        <HeaderMessage />
        <UserButton />
        <SettingsButton />
      </S.Container>
    </S.Header>
  );
};

export default Header;
