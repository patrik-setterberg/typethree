interface LayoutsValues {
  [key: string]: {
    name: string;
    layout: Array<string[]>;
    matchingPattern: RegExp; // Used for keyboard highlighting.
  };
}

// Supported keyboard layouts.
const Layouts: LayoutsValues = {
  QWERTY_US: {
    name: "US English (QWERTY)",
    layout: [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
      ["\u21e7", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\u21e7"],
    ],
    matchingPattern: /^[a-z|A-Z,.';[\]/ ]$/g,
  },
  DVORAK_US: {
    name: "US English (DVORAK)",
    layout: [
      ["'", ",", ".", "p", "y", "f", "g", "c", "r", "l", "/", "="],
      ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-"],
      ["\u21e7", ";", "q", "j", "k", "x", "b", "m", "w", "v", "z", "\u21e7"],
    ],
    matchingPattern: /^[a-z|A-Z,.';\-=/ ]$/g,
  },
  QWERTZ_DE: {
    name: "German (QWERTZ)",
    layout: [
      ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü", "+"],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "#"],
      ["\u21e7", "<", "y", "x", "c", "v", "b", "n", "m", ",", ".", "-", "\u21e7"],
    ],
    matchingPattern: /^[a-z|A-ZüÜäÄöÖ<,.'\-#+ ]$/g,
  },
  AZERTY_FR: {
    name: "French (AZERTY)",
    layout: [
      ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$"],
      ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*"],
      ["\u21e7", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!", "\u21e7"],
    ],
    matchingPattern: /^[a-z|A-Z^$ù*<,;:! ]$/g,
  },
  QWERTY_SE: {
    name: "Swedish (QWERTY)",
    layout: [
      ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å", '"'],
      ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "'"],
      ["\u21e7", "<", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "\u21e7"],
    ],
    matchingPattern: /^[a-z|A-ZåÅäÄöÖ<,.'\- ]$/g,
  },
};

export default Layouts;
