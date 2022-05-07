import * as S from "./Button.styles";
import { ButtonProps } from "./Button.interfaces";

const Button = ({ onClickFunc, label, ariaLabel, isActive }: ButtonProps): JSX.Element => {
  return <S.Button onClick={onClickFunc} isActive={isActive} aria-label={ariaLabel}>{label}</S.Button>;
};

export default Button;
