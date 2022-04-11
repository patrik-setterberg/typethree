import * as S from "./HeaderButton.styles";
import Props from "./HeaderButton.interfaces";

const HeaderButton = ({
  clickFunc,
  title,
  ariaLabel,
  modalIsOpen,
  children,
}: Props): JSX.Element => {
  return (
    <S.Wrapper>
      <S.HeaderButton onClick={clickFunc} aria-label={ariaLabel} modalIsOpen={modalIsOpen}>
        {children}
      </S.HeaderButton>
      <S.HeaderButtonTitle>{title}</S.HeaderButtonTitle>
    </S.Wrapper>
  );
};

export default HeaderButton;
