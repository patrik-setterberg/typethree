import { useCallback, useContext, useEffect, useRef } from "react";

import { InputProps } from "./Input.interfaces";
import * as S from "./Input.styles";

import FocusContext from "../../../context/focus-context";

const Input = ({
  inputVal,
  pressedKeys,
  handleChange,
  handleKeyDown,
  handleKeyUp,
}: InputProps): JSX.Element => {
  const focusCtx = useContext(FocusContext);

  const inputEl = useRef<HTMLInputElement>(null);

  const focusInput = useCallback((): void => {
    inputEl.current && inputEl.current.focus();
  }, []);

  // Focus input on blur (input loses focus).
  const handleBlur = useCallback((): void => {
    focusInput();
  }, [focusInput]);

  // Also focus input when window regains focus.
  useEffect(() => {
    focusCtx.windowIsFocused && focusInput();
  }, [focusCtx.windowIsFocused, focusInput]);

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
      autoFocus
    />
  );
};

export default Input;
