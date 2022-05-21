import { useContext, useEffect, useState } from "react";

import { TypeTestProps } from "./TypeTest.interfaces";

import SettingsContext from "../../context/settings-context";
import * as settings from "./settings";

import Input from "./Input/Input";
import TestCountdown from "../TestCountdown/TestCountdown";
import TestText from "./TestText/TestText";

const TypeTest = ({}: TypeTestProps): JSX.Element => {
  const TEST_WORD_COUNT: number = 30;

  const settingsCtx = useContext(SettingsContext);

  const loadWords = async (list: string): Promise<string[][]> => {
    let wordList = (await import("../../assets/words/" + list)).default;
    let testWords = [[]];

    for (let i: number = 0; i < TEST_WORD_COUNT; i++) {
      let randomIndex = Math.floor(Math.random() * (wordList.length + 1));
      testWords[i] = Array.from(wordList[randomIndex]);
      wordList.splice(randomIndex, 1);
    }

    return testWords;
  };

  const initialString = Array.from("Loading words");
  const [words, setWords] = useState<string[][]>([initialString]);

  useEffect(() => {
    const promisedWords = loadWords(
      settings.TestWords[settingsCtx.TestWordsList]
    ).then((promisedWords) => setWords(promisedWords));
  }, [settingsCtx.TestWordsList]);

  return (
    <>
      <TestCountdown />
      <Input />
      <TestText words={words} />
    </>
  );
};

export default TypeTest;
