import useSettingsContext from "../../../hooks/useSettingsContext";

import Layouts from "../../../assets/misc/KeyboardLayouts";

import * as S from "./Keyboard.styles";
import { KeyboardProps } from "./Keyboard.interfaces";

const Keyboard = ({ pressedKeys }: KeyboardProps): JSX.Element => {
  const settingsCtx = useSettingsContext();

  return (
    <S.Keyboard>
      {Layouts[settingsCtx.KeyboardLayout].layout.map((row, i) => {
        return (
          <S.Row
            key={i}
            iso={i === 2 && row.length > 12} // ANSI has 12 bottom keys.
            LShiftPressed={pressedKeys.some(
              (pressedKey) => pressedKey.symbol === "ShiftLeft"
            )}
            RShiftPressed={pressedKeys.some(
              (pressedKey) => pressedKey.symbol === "ShiftRight"
            )}
          >
            {row.map((keySymbol, i) => {
              return (
                <S.Key
                  key={i}
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
