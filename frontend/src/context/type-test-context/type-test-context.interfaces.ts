export interface TypeTestContextValues {
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  timeLeft: number;
  setTimeLeft: React.Dispatch<React.SetStateAction<number>>;
}
