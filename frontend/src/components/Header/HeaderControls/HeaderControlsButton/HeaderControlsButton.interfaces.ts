interface HeaderButtonProps {
  clickFunc: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  ariaLabel: string;
  modalIsOpen: boolean;
  children: React.ReactNode;
}

export default HeaderButtonProps;
