export interface TestTextProps {
  words: Array<string[]>;
  enteredWords: Array<string>;
  inputVal: string;
  animate: boolean; // Animate caret (blinking).
}
