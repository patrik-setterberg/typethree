import {
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import useSettingsContext from "../../hooks/useSettingsContext";
import useTypeTestContext from "../../hooks/useTypeTestContext";
import WindowContext from "../../context/window-context";

// Interfaces.
import { TypeTestProps, pressedKeys } from "./TypeTest.interfaces";
import { SortedEnteredWordsValues } from "../../context/type-test-context/type-test-context.interfaces";

import Layouts from "../../assets/misc/KeyboardLayouts";

// Words.
import eng1k from "../../assets/words/words-english-1k";
import swe1k from "../../assets/words/words-swedish-1k";

// Components.
import Input from "./Input/Input";
import Keyboard from "./Keyboard/Keyboard";
import TestCountdown from "./TestCountdown/TestCountdown";
import TestText from "./TestText/TestText";

const TypeTest = ({}: TypeTestProps): JSX.Element => {
  const settingsCtx = useSettingsContext();
  const typeTestCtx = useTypeTestContext();
  const windowCtx = useContext(WindowContext);

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

  const addWords = useCallback(
    (count: number): void => {
      const newWords = loadWords(wordArrays[settingsCtx.TestWords], count);
      setTestWords((testWords) => [...testWords.concat(newWords)]);
    },
    [loadWords, settingsCtx.TestWords, wordArrays]
  );

  useEffect(() => {
    addWords(typeTestCtx.newWordsCount);
  }, [addWords, typeTestCtx.hiddenWordsCount, typeTestCtx.newWordsCount]);

  // Hidden text-input value.
  const [inputVal, setInputVal] = useState<string>("");

  // Store entered words in an array. When space is pressed (and maybe when test ends),
  // characters in text input get pushed to the array. This array can be compared
  // with testwords wordArr to calculate score and styling correct/incorrect words.
  const [enteredWords, setEnteredWords] = useState<string[][] | []>([]);

  // Sort entered words into correct & incorrect arrays.
  const sortEnteredWords = useCallback((): SortedEnteredWordsValues => {
    let sorted: SortedEnteredWordsValues = {
      correct: [],
      incorrectEntered: [],
      incorrectExpected: [],
    };

    enteredWords &&
      testWords &&
      enteredWords.forEach((enteredWord, i) => {
        let word: string = enteredWord.join("");
        if (word === testWords[i].join("")) {
          sorted.correct.push(word);
        } else {
          sorted.incorrectEntered.push(word);
          sorted.incorrectExpected.push(testWords[i].join(""));
        }
      });

    // Also include not-yet completed word (inputVal).
    if (inputVal === testWords[enteredWords.length].join("")) {
      sorted.correct.push(inputVal);
    } else {
      sorted.incorrectEntered.push(inputVal);
      sorted.incorrectExpected.push(testWords[enteredWords.length].join(""));
    }

    return sorted;
  }, [inputVal, enteredWords, testWords]);

  const startTest = (): void => {
    typeTestCtx.setTestInProgress(true);
  };

  const endTest = (): void => {
    typeTestCtx.setTestInProgress(false);
    setTestWords(
      loadWords(
        wordArrays[settingsCtx.TestWords],
        typeTestCtx.testWordsVisibleCount
      )
    );
    setTimeLeft(settingsCtx.TestLength);
    setEnteredWords([]);
    setInputVal("");
  };

  const concludeTest = useCallback((): void => {
    typeTestCtx.setTestInProgress(false);
    typeTestCtx.setTestConcluded(true);
    typeTestCtx.setSortedEnteredWords(sortEnteredWords());
  }, [typeTestCtx, sortEnteredWords]);

  // Update wordArr and testWords if setting changes (and on first render).
  useEffect(() => {
    setWordArr(wordArrays[settingsCtx.TestWords]);
    setTestWords(
      loadWords(
        wordArrays[settingsCtx.TestWords],
        typeTestCtx.testWordsVisibleCount
      )
    );
  }, [
    settingsCtx.TestWords,
    loadWords,
    wordArrays,
    typeTestCtx.testWordsVisibleCount,
  ]);

  type pressedKeysStateType = {
    pressedKeys: pressedKeys[];
  };

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

  const initialValue: pressedKeysStateType = { pressedKeys: [] };

  const pressedKeysReducer = (
    state: pressedKeysStateType,
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

  const handleSpace = (): void => {
    if (inputVal.length > 0) {
      if (enteredWords.length > 0) {
        setEnteredWords([...enteredWords, inputVal.split("")]);
      } else {
        setEnteredWords([inputVal.split("")]);
      }
    }

    setInputVal("");
  };

  const checkWordCorrect = (): boolean => {
    return testWords[enteredWords.length].join("") === inputVal;
  };

  const checkLetterCorrect = (key: string): boolean => {
    return key === testWords[enteredWords.length][inputVal.length];
  };

  const checkBackspacePressed = (): boolean => {
    return pressedKeysState.pressedKeys.some(
      (pressedKey) => pressedKey.symbol === "Backspace"
    );
  };

  const handleInputKeyDown = (e: React.KeyboardEvent): void => {
    // Easter egg for cool people.
    /* if (e.key === "Hyper") {
      console.log("Woah!");
      } */

    // Prevent repeat input while holding key pressed. BAD?
    e.repeat && e.preventDefault();

    if (
      (e.key.match(layoutCharsPattern) || e.key === "Backspace") &&
      e.repeat === false
    ) {
      dispatchPressedKeys({
        type: "ADD",
        payload: {
          symbol: e.key,
          correct:
            e.key === " " ? checkWordCorrect() : checkLetterCorrect(e.key),
        },
      });
    } else if (e.key === "Shift") {
      // If key is Shift, instead add its 'code' because it allows us to differentiate
      // left from right shift keys.
      dispatchPressedKeys({
        type: "ADD",
        payload: { symbol: e.code, correct: true },
      });
    } else if (e.key === "Escape") {
      endTest();
    }
  };

  // NOTE: THIS FUNCTION HAS A PROBLEM! Doesn't remove special chars which
  // require shift key if shift key is released before the char's key.
  const handleInputKeyUp = useCallback((e: React.KeyboardEvent): void => {
    if (e.key === "Shift") {
      dispatchPressedKeys({ type: "REMOVE", payload: { symbol: e.code } });
    } else {
      // Remove both a key's uppercase and lowercase symbols to definitely remove it.
      // Useful in case user pressed or released shift while pressing the letter key.
      dispatchPressedKeys({
        type: "REMOVE",
        payload: {
          symbol: e.key === "Backspace" ? e.key : e.key.toLowerCase(),
        },
      });
      dispatchPressedKeys({
        type: "REMOVE",
        payload: { symbol: e.key.toUpperCase() },
      });
    }
  }, []);

  const updateInputValue = useCallback(
    (inputValLen: number, val: string) => {
      if (
        inputValLen < testWords[enteredWords.length].length ||
        val.length < inputValLen
      ) {
        setInputVal(val);
      }
    },
    [testWords, enteredWords.length]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (!typeTestCtx.testInProgress) startTest();

    updateInputValue(inputVal.length, e.target.value);
    if (e.target.value.slice(-1) === " ") {
      handleSpace();
    }
  };

  const [timeLeft, setTimeLeft] = useState<number>(settingsCtx.TestLength);

  // Timer for test duration countdown.
  useEffect(() => {
    let timerInterval: ReturnType<typeof setInterval>;

    if (typeTestCtx.testInProgress && windowCtx.windowIsFocused) {
      /**
       * Runs a clock which decreases timeLeft by 1 every second.
       * Timer clears if document loses focus. Restarts when focus is regained.
       * BAD SOLUTION:
       * Drifts - These "seconds" are slightly longer than normal seconds, about ~1s over 30s
       * Inaccurate / bad because it gives a < 1s leeway when regaining focus.
       *
       * FIX A BETTER TIMER AND TIME HANDLING STRATEGY?
       *
       * AT LEAST TRY A PRODUCTION BUILD!
       */
      timerInterval = setInterval((): void => {
        setTimeLeft((timeLeft) => timeLeft - 1);
      }, 1000);
    }

    return () => {
      clearInterval(timerInterval);
    };
  }, [typeTestCtx.testInProgress, windowCtx.windowIsFocused, timeLeft]);

  // End test when timer reaches zero.
  useEffect((): void => {
    if (timeLeft <= 0) {
      concludeTest();
    }
  }, [timeLeft, concludeTest]);

  return (
    <>
      <TestCountdown timeLeft={timeLeft} />
      <TestText
        words={testWords}
        animate={pressedKeysState.pressedKeys.length === 0}
        inputVal={inputVal}
        enteredWords={enteredWords}
        backspacePressed={checkBackspacePressed()}
      />
      <Input
        inputVal={inputVal}
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
