export interface DefaultSettingsValues {
  TestWords: string;
  ShowKeyboard: boolean;
  KeyboardLayout: string;
}

export interface SettingsContextValues {
  // SITE PREFERENCES //
  // Theme
  // ..
  // TYPE TEST PREFERENCES //
  TestWords: string;
  ShowKeyboard: boolean;
  setShowKeyboard: React.Dispatch<React.SetStateAction<boolean>>,
  KeyboardLayout: string;
  setKeyboardLayout: React.Dispatch<React.SetStateAction<string>>;
  // Test length
  // ...
}