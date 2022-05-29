import {
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from "react";
import useSettingsContext from "../../hooks/useSettingsContext";

// Interfaces.
import { TypeTestProps, pressedKeys } from "./TypeTest.interfaces";

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
          pressedKeys: [
            ...state.pressedKeys,
            action.payload,
          ],
        };
      case "REMOVE":
        return {
          ...state,
          pressedKeys: state.pressedKeys.filter(
            (pressedKeys) =>
              pressedKeys.symbol !== action.payload.symbol
          ),
        };
    }
  };

  const [pressedKeysState, dispatchPressedKeys] = useReducer(pressedKeysReducer, initialValue);

  // Store entered words in an array. When space is pressed (and maybe when test ends),
  // characters in text input get pushed to the array. This array can be compared
  // with testwords wordArr to calculate score and styling correct/incorrect words.
  const [enteredWords, setEnteredWords] = useState<string[] | undefined>(undefined);

  return (
    <>
      <TestCountdown />
      <TestText words={testWords} />
      <Input
        inputVal={inputVal}
        setInputVal={setInputVal}
        pressedKeys={pressedKeysState.pressedKeys}
        setPressedKeys={dispatchPressedKeys}
      />
      {settingsCtx.ShowKeyboard && <Keyboard pressedKeys={pressedKeysState.pressedKeys}/>}
    </>
  );
};

export default TypeTest;
