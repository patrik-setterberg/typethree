import React, { useContext, useEffect, useMemo, useRef } from "react";

import { InputProps } from "./Input.interfaces";
import * as S from "./Input.styles";
import { MatchingPatterns } from "../../../assets/misc/KeyboardLayouts";

import FocusContext from "../../../context/focus-context";
import SettingsContext from "../../../context/settings-context";

const Input = ({
  inputVal,
  setInputVal,
  pressedKeys,
  setPressedKeys,
}: InputProps): JSX.Element => {
  const focusCtx = useContext(FocusContext);
  const settingsCtx = useContext(SettingsContext);

  const inputEl = useRef<HTMLInputElement>(null);

  const layoutCharsPattern: RegExp = useMemo(() => {
    return MatchingPatterns[settingsCtx.KeyboardLayout];
  }, [settingsCtx.KeyboardLayout]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    // Easter egg for cool people.
    /* if (e.key === "Hyper") {
      console.log("Woah!");
    } */

    if (e.key.match(layoutCharsPattern) && e.repeat === false) {
      setPressedKeys({
        type: "ADD",
        payload: { symbol: e.key, correct: true },
      });
    }

    // If key is Shift, instead add its 'code' because it allows us to differentiate
    // left from right shift keys.
    if (e.key === "Shift") {
      setPressedKeys({
        type: "ADD",
        payload: { symbol: e.code, correct: true },
      });
    }

    // Check correct key: 'correct: e.key === expected' eller nått.
  };

  const handleKeyUp = (e: React.KeyboardEvent): void => {
    if (e.key === "Shift") {
      setPressedKeys({ type: "REMOVE", payload: { symbol: e.code } });
    }
    // Remove both a key's uppercase and lowercase symbols to definitely remove it.
    // Useful in case user pressed or released shift while pressing the letter key.
    setPressedKeys({
      type: "REMOVE",
      payload: { symbol: e.key.toLowerCase() },
    });
    setPressedKeys({
      type: "REMOVE",
      payload: { symbol: e.key.toUpperCase() },
    });
  };

  const focusInput = (): void => {
    inputEl.current && inputEl.current.focus();
  };

  const handleBlur = (): void => {
    focusInput();
  };

  useEffect(() => {
    focusCtx.windowIsFocused && focusInput();
  }, [focusCtx.windowIsFocused]);

  return (
    <S.Input
      type="text"
      aria-label="TYPETEST text input"
      ref={inputEl}
      value={inputVal}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      onKeyUp={handleKeyUp}
      onChange={handleChange}
    />
  );
};

export default Input;
