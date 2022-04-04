import * as StyledComponents from "./Header.styles";
import {Container}  from "../UI/Container.styles";
import SettingsButton from "./SettingsButton";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const S = {...StyledComponents, Container};

  return (
    <S.Header>
      <S.Container>
        <div>type|three</div>
        <SettingsButton />
      </S.Container>
    </S.Header>
  );
};

export default Header;
