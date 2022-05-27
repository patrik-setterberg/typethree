export interface ToggleSwitchProps {
  Id: string;
  labelText: string;
  checked: boolean;
  onChangeFunc: (isChecked: boolean) => void;
}
