import { useCallback, useContext, useEffect, useState } from "react";

import { TypeTestProps } from "./TypeTest.interfaces";

// Words.
import eng1k from "../../assets/words/words-english-1k";
import swe1k from "../../assets/words/words-swedish-1k";

import SettingsContext from "../../context/settings-context";

import Input from "./Input/Input";
import Keyboard from "./Keyboard/Keyboard";
import TestCountdown from "../TestCountdown/TestCountdown";
import TestText from "./TestText/TestText";

const TypeTest = ({}: TypeTestProps): JSX.Element => {
  const TEST_WORD_COUNT: number = 30;

  const settingsCtx = useContext(SettingsContext);

  // Hmmm...
  const wordArrays: { [key: string]: Array<string> } = {
    eng1k: eng1k,
    swe1k: swe1k,
  };

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
    []
  );

  const [wordArr, setWordArr] = useState<string[]>(
    wordArrays[settingsCtx.TestWords]
  );

  const [testWords, setTestWords] = useState<string[][]>([[]]);

  // Update wordArr and testWords if setting changes (and on first render).
  useEffect(() => {
    setWordArr(wordArrays[settingsCtx.TestWords]);
    setTestWords(loadWords(wordArrays[settingsCtx.TestWords], TEST_WORD_COUNT));
  }, [settingsCtx.TestWords]);

  return (
    <>
      <TestCountdown />
      <TestText words={testWords} />
      <Input />
      {settingsCtx.ShowKeyboard && <Keyboard />}
    </>
  );
};

export default TypeTest;
