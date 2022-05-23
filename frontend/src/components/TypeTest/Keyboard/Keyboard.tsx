import { useContext } from "react";

import SettingsContext from "../../../context/settings-context";
import Layouts from "../../../assets/misc/KeyboardLayouts";

import * as S from "./Keyboard.styles";
import { KeyboardProps } from "./Keyboard.interfaces";

const Keyboard = ({}: KeyboardProps): JSX.Element => {
  const settingsCtx = useContext(SettingsContext);
  return (
    <S.Keyboard>
      {Layouts[settingsCtx.KeyboardLayout].map((row, ind) => {
        return (
          <S.Row
            key={ind}
            iso={ind === 2 && row.length > 12} // ANSI has 12 bottom keys.
          >
            {row.map((keySymbol, ind) => {
              return <S.Key key={ind}>{keySymbol.toUpperCase()}</S.Key>;
            })}
          </S.Row>
        );
      })}
      <S.Row>
        <S.Key>
          {`\u2007` /* A good looking whitespace character. */}
        </S.Key>
      </S.Row>
    </S.Keyboard>
  );
};

export default Keyboard;
