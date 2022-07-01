import useSettingsContext from "../../../hooks/useSettingsContext";

import Layouts from "../../../assets/misc/KeyboardLayouts";

import * as S from "./Keyboard.styles";
import { KeyboardProps } from "./Keyboard.interfaces";

const Keyboard = ({ pressedKeys }: KeyboardProps): JSX.Element => {
  const settingsCtx = useSettingsContext();

  const checkIsPressed = (key: string): boolean => {
    return pressedKeys.some(
      (pressedKey) => pressedKey.symbol.toLowerCase() === key
    );
  };

  const checkIsIncorrect = (key: string): boolean => {
    return pressedKeys.some(
      (pressedKey) =>
        pressedKey.symbol.toLowerCase() === key && !pressedKey.correct
    );
  };

  return (
    <S.Keyboard>
      {Layouts[settingsCtx.KeyboardLayout].layout.map((row: string[], i) => {
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
                  pressed={checkIsPressed(keySymbol)}
                  incorrect={checkIsIncorrect(keySymbol)}
                >
                  {keySymbol.toUpperCase()}
                </S.Key>
              );
            })}
          </S.Row>
        );
      })}
      <S.Row>
        <S.Key pressed={checkIsPressed(" ")} incorrect={checkIsIncorrect(" ")}>{
          `\u2007` /* Spacebar key */
        }</S.Key>
      </S.Row>
    </S.Keyboard>
  );
};

export default Keyboard;
