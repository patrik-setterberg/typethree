// Supported keyboard layouts.
const Layouts: { [key: string]: Array<string[]> } = {
  DVORAK_US: [
    ["'", ",", ".", "p", "y", "f", "g", "c", "r", "l", "/", "="],
    ["a", "o", "e", "u", "i", "d", "h", "t", "n", "s", "-"],
    ["\u21e7", ";", "q", "j", "k", "x", "b", "m", "w", "v", "z", "\u21e7"],
  ],
  QWERTY_US: [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'"],
    ["\u21e7", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "\u21e7"],
  ],
  QWERTY_SE: [
    ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "å", '"'],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "'"],
    ["\u21e7", "<", "z", "x", "c", "v", "b", "n", "m", ",", ".", "-", "\u21e7"],
  ],
  QWERTZ_DE: [
    ["q", "w", "e", "r", "t", "z", "u", "i", "o", "p", "ü", "+"],
    ["a", "s", "d", "f", "g", "h", "j", "k", "l", "ö", "ä", "#"],
    ["\u21e7", "<", "y", "x", "c", "v", "b", "n", "m", ",", ".", "-", "\u21e7"],
  ],
  AZERTY_FR: [
    ["a", "z", "e", "r", "t", "y", "u", "i", "o", "p", "^", "$"],
    ["q", "s", "d", "f", "g", "h", "j", "k", "l", "m", "ù", "*"],
    ["\u21e7", "<", "w", "x", "c", "v", "b", "n", ",", ";", ":", "!", "\u21e7"],
  ],
};

// Matching patterns for each layout, used for keyboard highlighting.
export const MatchingPatterns: { [key: string]: RegExp } = {
  DVORAK_US: /^[a-z|A-Z,.';\-=/ ]$/g,
  QWERTY_US: /^[a-z|A-Z,.';[\]/ ]$/g,
  QWERTY_SE: /^[a-z|A-ZåÅäÄöÖ<,.'\- ]$/g,
  QWERTZ_DE: /^[a-z|A-ZüÜäÄöÖ<,.'\-#+ ]$/g,
  AZERTY_FR: /^[a-z|A-Z^$ù*<,;:! ]$/g,
};

export default Layouts;
