export interface SettingsItemProps {
  togglerId: string;
  togglerLabel: string;
  togglerFunc: () => void;
  children: React.ReactNode;
}