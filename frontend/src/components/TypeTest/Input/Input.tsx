import React, { useContext, useEffect, useRef, useState } from "react";

import { InputProps } from "./Input.interfaces";
import * as S from "./Input.styles";

import FocusContext from "../../../context/focus-context";

const Input = ({
  inputVal,
  setInputVal,
  pressedKeys,
  setPressedKeys,
}: InputProps): JSX.Element => {
  const focusCtx = useContext(FocusContext);

  const inputEl = useRef<HTMLInputElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputVal(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent): void => {
    // Easter egg for cool people.
    /* if (e.key === "Hyper") {
      console.log("Woah!");
    } */

    if (e.key.match(/^[a-z|A-Z ]$/g) && e.repeat === false) {
      setPressedKeys({
        type: "ADD",
        payload: { symbol: e.key, correct: true },
      });
    }

    // If key is Shift, instead add its 'code'.
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

  useEffect(() => {
    if (pressedKeys.length > 0) {
      let myArr: Array<string> = [];
      pressedKeys.forEach((pressedKey) => myArr.push(pressedKey.symbol));
      console.log(myArr);
    }
  }, [pressedKeys]);

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
