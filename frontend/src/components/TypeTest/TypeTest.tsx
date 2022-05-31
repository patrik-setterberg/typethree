import { useCallback, useEffect, useMemo, useReducer, useState } from "react";
import useSettingsContext from "../../hooks/useSettingsContext";

// Interfaces.
import { TypeTestProps, pressedKeys } from "./TypeTest.interfaces";

import Layouts from "../../assets/misc/KeyboardLayouts";

// Words.
import eng1k from "../../assets/words/words-english-1k";
import swe1k from "../../assets/words/words-swedish-1k";

// Components.
import Input from "./Input/Input";
import Keyboard from "./Keyboard/Keyboard";
import TestCountdown from "../TestCountdown/TestCountdown";
import TestText from "./TestText/TestText";

const TypeTest = ({}: TypeTestProps): JSX.Element => {
  // Test word count. Maybe change automatically if
  // we have a setting for changing text font size?
  const TEST_WORD_COUNT: number = 30;

  const settingsCtx = useSettingsContext();

  type wordArray = {
    [key: string]: Array<string>;
  };

  const wordArrays: wordArray = useMemo<wordArray>(() => {
    return {
      eng1k: eng1k,
      swe1k: swe1k,
    };
  }, []);

  const [wordArr, setWordArr] = useState<string[]>(
    wordArrays[settingsCtx.TestWords]
  );

  const loadWords = useCallback(
    (arr: Array<string>, count: number): Array<string[]> => {
      let newArr: Array<string> = arr;
      let words: Array<string[]> = [];

      for (let i: number = 0; i < count; i++) {
        const randomIndex: number = Math.floor(
          Math.random() * (wordArr.length + 1)
        );
        if (newArr[randomIndex]) {
          words[i] = Array.from(wordArr[randomIndex]);
        }
        newArr.splice(randomIndex, 1);
      }
      setWordArr(newArr);

      return words;
    },
    [wordArr]
  );

  const [testWords, setTestWords] = useState<string[][]>([[]]);

  // Update wordArr and testWords if setting changes (and on first render).
  useEffect(() => {
    setWordArr(wordArrays[settingsCtx.TestWords]);
    setTestWords(loadWords(wordArrays[settingsCtx.TestWords], TEST_WORD_COUNT));
  }, [settingsCtx.TestWords, loadWords, wordArrays]);

  // Hidden text-input value.
  const [inputVal, setInputVal] = useState<string>("");

  interface pressedKeysStateI {
    pressedKeys: pressedKeys[];
  }

  type pressedKeysActionType =
    | {
        type: "ADD";
        payload: {
          symbol: string;
          correct: boolean;
        };
      }
    | {
        type: "REMOVE";
        payload: { symbol: string };
      };

  const initialValue: pressedKeysStateI = { pressedKeys: [] };

  const pressedKeysReducer = (
    state: pressedKeysStateI,
    action: pressedKeysActionType
  ) => {
    switch (action.type) {
      case "ADD":
        return {
          ...state,
          pressedKeys: [...state.pressedKeys, action.payload],
        };
      case "REMOVE":
        return {
          ...state,
          pressedKeys: state.pressedKeys.filter(
            (pressedKeys) => pressedKeys.symbol !== action.payload.symbol
          ),
        };
    }
  };

  const [pressedKeysState, dispatchPressedKeys] = useReducer(
    pressedKeysReducer,
    initialValue
  );

  const layoutCharsPattern: RegExp = useMemo(() => {
    return Layouts[settingsCtx.KeyboardLayout].matchingPattern;
  }, [settingsCtx.KeyboardLayout]);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>): void => {
      setInputVal(e.target.value);
      //console.log(e.target.value.slice(-1) === " ");
      console.log("heheheheheh in the middle of the night");
    },
    []
  );

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent): void => {
      // Easter egg for cool people.
      /* if (e.key === "Hyper") {
      console.log("Woah!");
    } */

      // Prevent repeat input while holding key pressed. BAD?
      e.repeat && e.preventDefault();

      if (e.key.match(layoutCharsPattern) && e.repeat === false) {
        dispatchPressedKeys({
          type: "ADD",
          payload: { symbol: e.key, correct: true },
        });
      }

      // If key is Shift, instead add its 'code' because it allows us to differentiate
      // left from right shift keys.
      if (e.key === "Shift") {
        dispatchPressedKeys({
          type: "ADD",
          payload: { symbol: e.code, correct: true },
        });
      }

      // Check correct key: 'correct: e.key === expected' eller nått.
    },
    [layoutCharsPattern]
  );

  // NOTE: THIS FUNCTION HAS A PROBLEM! Doesn't remove special chars which
  // require shift key if shift key is released before the char's key.
  const handleInputKeyUp = useCallback((e: React.KeyboardEvent): void => {
    if (e.key === "Shift") {
      dispatchPressedKeys({ type: "REMOVE", payload: { symbol: e.code } });
    }
    // Remove both a key's uppercase and lowercase symbols to definitely remove it.
    // Useful in case user pressed or released shift while pressing the letter key.
    dispatchPressedKeys({
      type: "REMOVE",
      payload: { symbol: e.key.toLowerCase() },
    });
    dispatchPressedKeys({
      type: "REMOVE",
      payload: { symbol: e.key.toUpperCase() },
    });
  }, []);

  // Store entered words in an array. When space is pressed (and maybe when test ends),
  // characters in text input get pushed to the array. This array can be compared
  // with testwords wordArr to calculate score and styling correct/incorrect words.
  /* const [enteredWords, setEnteredWords] = useState<string[] | undefined>(
    undefined
  ); */

  return (
    <>
      <TestCountdown />
      <TestText
        words={testWords}
        animate={pressedKeysState.pressedKeys.length === 0}
      />
      <Input
        inputVal={inputVal}
        pressedKeys={pressedKeysState.pressedKeys}
        handleChange={handleInputChange}
        handleKeyDown={handleInputKeyDown}
        handleKeyUp={handleInputKeyUp}
      />
      {settingsCtx.ShowKeyboard && (
        <Keyboard pressedKeys={pressedKeysState.pressedKeys} />
      )}
    </>
  );
};

export default TypeTest;
