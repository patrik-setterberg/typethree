interface HeaderButtonProps {
  clickFunc: (event: React.MouseEvent<HTMLButtonElement>) => void;
  title: string;
  ariaLabel: string;
  //onClick: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}

export default HeaderButtonProps;
