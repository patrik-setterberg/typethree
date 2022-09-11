import { Themes } from "styled-components";

const themes: Themes = {
  // https://coolors.co/191d23-121519-fdfb8d-f6f5be-eeeeee-a3a3a3 maybe
  dark: {
    primary: "#EEE",
    /* highlight: '#FFD369', // current */
    // highlight: '#E6F14A', // maximum green yellow
    // highlight: '#DCF763', // liknande
    // highlight: '#EEF36A', // icterine
    // highlight: '#E9FF70', // mindaro
    highlight: "#FDE74C", // minion yellow, ganska najs!
    // highlight: '#DEB841', // gold metallic also nice
    // highlight: '#FAFF7F', // laser lemon very nice
    // highlight: '#CCFF66', // inchworm
    // highlight: '#FFEF9F', // green yellow crayola
    // highlight: '#FFFD82', // canary SERIOUS CANDIDATE
    // highlight: '#FDFB8D', // en till canary
    error: "#DF5E33",
    missed: "#A3A3A3",
    backgroundPrimary: "#191d23",
    backgroundSecondary: "#121519",
    backgroundTertiary: "#20252d",
    backgroundFourthenary: "#272d37",
  },
  light: {
    primary: "#333",
    highlight: "orange",
		error: "red",
		missed: "gray",
    backgroundPrimary: "#fff",
    backgroundSecondary: "#999",
    backgroundTertiary: "#888",
    backgroundFourthenary: "#777",
  },
};

export default themes;

export const defaultTheme: string = "dark";
