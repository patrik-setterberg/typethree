import React from "react";

import { pressedKeys } from "../TypeTest.interfaces";

export interface InputProps {
  inputVal: string;
  setInputVal: React.Dispatch<React.SetStateAction<string>>;
  pressedKeys: pressedKeys[];
  setPressedKeys: React.Dispatch<any>;
}
