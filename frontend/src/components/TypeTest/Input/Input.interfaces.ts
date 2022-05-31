import React from "react";

import { pressedKeys } from "../TypeTest.interfaces";

export interface InputProps {
  inputVal: string;
  pressedKeys: pressedKeys[];
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown:  (e: React.KeyboardEvent) => void;
  handleKeyUp: (e: React.KeyboardEvent) => void;
}
