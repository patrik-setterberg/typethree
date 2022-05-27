import { ChangeEvent } from "react";

import * as S from "./RadioButtons.styles";
import { RadioButtonsProps } from "./RadioButtons.interfaces";

const RadioButtons = ({
  name,
  legend,
  changeFunc,
  items,
}: RadioButtonsProps): JSX.Element => {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeFunc(e.target.value);
  };

  return (
    <S.Fieldset>
      <S.Legend>{legend}</S.Legend>
      {items.map((item) => {
        return (
          <S.Label>
            <S.RadioButton
              type="radio"
              name={name}
              aria-label={item.label}
              value={item.value}
              onChange={handleChange}
            />
            {item.label}
          </S.Label>
        );
      })}
    </S.Fieldset>
  );
};

export default RadioButtons;
