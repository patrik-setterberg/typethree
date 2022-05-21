import * as S from "./ToggleSwitch.styles";
import { ToggleSwitchProps } from "./ToggleSwitch.interfaces";
import React from "react";

const ToggleSwitch = ({
  Id,
  labelText,
  onChangeFunc,
}: ToggleSwitchProps): JSX.Element => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChangeFunc(isChecked);
  };

  return (
    <S.Wrapper labelTextLen={labelText.length}>
      <S.Input type="checkbox" id={Id} onChange={handleChange} />
      <S.Label htmlFor={Id} labelTextLen={labelText.length}>
        {labelText}
      </S.Label>
    </S.Wrapper>
  );
};

export default ToggleSwitch;
