import React, { useContext, useEffect, useRef, useState } from "react";

import { InputProps } from "./Input.interfaces";
import * as S from "./Input.styles";

import FocusContext from "../../../context/focus-context";

const Input = ({}: InputProps): JSX.Element => {
  const focusCtx = useContext(FocusContext);

  const inputEl = useRef<HTMLInputElement>(null);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const focusInput = () => {
    inputEl.current && inputEl.current.focus();
  };

  const handleBlur = () => {
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
      value={inputValue}
      onChange={handleChange}
      onBlur={handleBlur}
    />
  );
};

export default Input;
