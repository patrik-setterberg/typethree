import * as S from "./HeaderMessage.styles";
import HeaderMessageProps from "./HeaderMessage.interfaces";

const HeaderMessage = ({}: HeaderMessageProps): JSX.Element => {
  return (
    <S.Wrapper>
      <S.HeaderMessage>Message!</S.HeaderMessage>
    </S.Wrapper>
  );
}

export default HeaderMessage;