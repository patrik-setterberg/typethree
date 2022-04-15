import * as HeaderControlsButtonStyles from "./HeaderControlsButton.styles";
import * as HeaderControlsNavElemStyles from "../HeaderControlsNavElem.styles";
import Props from "./HeaderControlsButton.interfaces";

const HeaderControlsButton = ({
  clickFunc,
  title,
  ariaLabel,
  modalIsOpen,
  children,
}: Props): JSX.Element => {
  const S = {...HeaderControlsButtonStyles, ...HeaderControlsNavElemStyles};

  return (
    <S.Wrapper>
      <S.HeaderControlsButton onClick={clickFunc} aria-label={ariaLabel} modalIsOpen={modalIsOpen}>
        {children}
      </S.HeaderControlsButton>
      <S.HeaderControlsElemTitle>{title}</S.HeaderControlsElemTitle>
    </S.Wrapper>
  );
};

export default HeaderControlsButton;
