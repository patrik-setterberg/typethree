import * as S from "./ToggleSwitch.styles";
import { ToggleSwitchProps } from "./ToggleSwitch.interfaces";
import React, { ChangeEvent } from "react";

const ToggleSwitch = ({ Id, labelText, onChangeFunc }: ToggleSwitchProps): JSX.Element => {

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = e.target.checked;
    onChangeFunc(isChecked);
  };

  return (
    <S.Wrapper>
      <S.Input
        type="checkbox"
        id={Id || "toggle_switch"}
        onChange={handleChange}
      />
      <S.Label
        htmlFor={Id || "toggle_switch"}
        labelTextLen={labelText.length || "Toggle".length}
      >
        {labelText || "Toggle"}
      </S.Label>
    </S.Wrapper>
  );
};

export default ToggleSwitch;
