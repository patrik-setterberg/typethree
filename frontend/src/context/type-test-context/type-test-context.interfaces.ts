import { SetStateAction } from "react";

export interface DefaultSettingsValues {
  
}

export interface TypeTestContextValues {
  // defaultSettings: DefaultSettingsValues; // kanske?
  playing: boolean;
  setPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}
