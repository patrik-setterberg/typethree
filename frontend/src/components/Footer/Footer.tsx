import * as StyledComponents from "./Footer.styles";
import Container  from "../UI/Container.styles";

const Footer = ({}):JSX.Element => {
  const S = {...StyledComponents, Container};

  return (
    <S.Footer>
      <S.Container>
        <span>Footer</span>
        <span>Very nice</span>
      </S.Container>
    </S.Footer>
  );
}

export default Footer;