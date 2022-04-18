import * as StyledComponents from "./Header.styles";
import { Container }  from "../UI/Container.styles";
import Branding from "./Branding/Branding";
import HeaderMessage from "./HeaderMessage/HeaderMessage";
import HeaderControls from "./HeaderControls/HeaderControls";

interface HeaderProps {}

const Header = ({}: HeaderProps): JSX.Element => {
  const S = {...StyledComponents, Container};

  return (
    <S.Header>
      <S.Container>
        <Branding />
        <HeaderMessage />
        <HeaderControls />
      </S.Container>
    </S.Header>
  );
};

export default Header;
