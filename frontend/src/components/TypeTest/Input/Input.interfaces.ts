export interface InputProps {
  inputVal: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown:  (e: React.KeyboardEvent) => void;
  handleKeyUp: (e: React.KeyboardEvent) => void;
}
