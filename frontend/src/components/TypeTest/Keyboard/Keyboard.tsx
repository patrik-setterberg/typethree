import { useContext, useEffect } from "react";

import SettingsContext from "../../../context/settings-context";
import Layouts from "../../../assets/misc/KeyboardLayouts";

import * as S from "./Keyboard.styles";
import { KeyboardProps } from "./Keyboard.interfaces";

const Keyboard = ({ pressedKeys }: KeyboardProps): JSX.Element => {
  const settingsCtx = useContext(SettingsContext);

  return (
    <S.Keyboard>
      {Layouts[settingsCtx.KeyboardLayout].map((row, ind) => {
        return (
          <S.Row
            key={ind}
            iso={ind === 2 && row.length > 12} // ANSI has 12 bottom keys.
            LShiftPressed={pressedKeys.some(
              (pressedKey) => pressedKey.symbol === "ShiftLeft"
            )}
            RShiftPressed={pressedKeys.some(
              (pressedKey) => pressedKey.symbol === "ShiftRight"
            )}
          >
            {row.map((keySymbol, ind) => {
              return (
                <S.Key
                  key={ind}
                  pressed={pressedKeys.some(
                    (pressedKey) =>
                      pressedKey.symbol.toLowerCase() === keySymbol
                  )}
                >
                  {keySymbol.toUpperCase()}
                </S.Key>
              );
            })}
          </S.Row>
        );
      })}
      <S.Row>
        <S.Key
          pressed={pressedKeys.some((pressedKey) => pressedKey.symbol === " ")}
        >{`\u2007` /* Spacebar key */}</S.Key>
      </S.Row>
    </S.Keyboard>
  );
};

export default Keyboard;
