import { SetStateAction } from "react";

export interface DefaultSettingsValues {
  TestLength: number;
  TestWords: string;
  ShowKeyboard: boolean;
  KeyboardLayout: string;
}

export interface SettingsContextValues {
  // SITE PREFERENCES //
  // Theme
  // ..
  // TYPE TEST PREFERENCES //
  TestLength: number;
  setTestLength: (len: string) => void;
  TestWords: string;
  setTestWords: React.Dispatch<SetStateAction<string>>;
  ShowKeyboard: boolean;
  setShowKeyboard: React.Dispatch<React.SetStateAction<boolean>>;
  KeyboardLayout: string;
  setKeyboardLayout: React.Dispatch<React.SetStateAction<string>>;
  // ...
}