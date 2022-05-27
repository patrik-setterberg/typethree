import { ChangeEvent } from "react";

import * as S from "./RadioButtons.styles";
import { RadioButtonsProps } from "./RadioButtons.interfaces";

const RadioButtons = ({
  name,
  legend,
  changeFunc,
  items,
  currentValue,
}: RadioButtonsProps): JSX.Element => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeFunc(e.target.value);
  };

  return (
    <S.Fieldset>
      <S.Legend>{legend}</S.Legend>
      {items.map((item, i) => {
        return (
          <S.Label key={i} checked={currentValue === item.value}>
            <S.RadioButton
              type="radio"
              name={name}
              aria-label={item.label}
              value={item.value}
              onChange={handleChange}
              checked={currentValue === item.value}
            />
            {item.label}
          </S.Label>
        );
      })}
    </S.Fieldset>
  );
};

export default RadioButtons;
