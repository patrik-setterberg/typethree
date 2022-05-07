export interface ButtonProps {
  onClickFunc: () => void;
  label: string;
  ariaLabel: string;
  isActive: boolean;
}