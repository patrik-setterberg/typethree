import 'styled-components';

declare module 'styled-components' {
  export interface Theme {
    primary: string;
    highlight: string;
    error: string;
    missed: string;
    backgroundPrimary: string;
    backgroundSecondary: string;
    backgroundTertiary: string;
    backgroundFourthenary: string;
  }
  export interface Themes {
    [key: string]: Theme;
  }
}