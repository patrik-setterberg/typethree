import React, { useCallback, useEffect, useState } from "react";

import {
  TypeTestContextValues,
  SortedEnteredWordsValues,
} from "./type-test-context.interfaces";

import useSettingsContext from "../../hooks/useSettingsContext";

const TypeTestContext = React.createContext<TypeTestContextValues | undefined>(
  undefined
);

export const TypeTestContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const settingsCtx = useSettingsContext();

  const testWordsVisibleCount: number = 32;

  const [testInProgress, setTestInProgress] = useState<boolean>(false);
  const [testConcluded, setTestConcluded] = useState<boolean>(false);
  const [sortedEnteredWords, setSortedEnteredWords] =
    useState<SortedEnteredWordsValues>({
      correct: [],
      incorrectEntered: [],
      incorrectExpected: [],
    });
  const [totalEnteredChars, setTotalEnteredChars] = useState<number>(0);
  const [characterAccuracy, setCharacterAccuracy] = useState<number>(0);
  const [totalWordsAttempted, setTotalWordsAttempted] = useState<number>(0);
  const [wordAccuracy, setWordAccuracy] = useState<number>(0);
  const [wpm, setWpm] = useState<number>(0);
  const [incorrectWordsCount, setIncorrectWordsCount] = useState<number>(0);
  const [incorrectWords, setIncorrectWords] = useState<string>("");

  const countCharsInArrayOfWords = useCallback((arr: string[]): number => {
    let enteredChars: number = 0;
    arr.forEach((word: string) => {
      enteredChars += word.length;
    });
    return enteredChars;
  }, []);

  const calculateTestResults = useCallback((): void => {
    // Calculate total entered chars.
    const correctWordsChars: number = countCharsInArrayOfWords(
      sortedEnteredWords.correct
    );
    const incorrectWordsChars: number = countCharsInArrayOfWords(
      sortedEnteredWords.incorrectEntered
    );
    const totalChars = correctWordsChars + incorrectWordsChars;

    // Calculate character accuracy.
    let correctChars: number = 0;
    sortedEnteredWords.correct.forEach((word) => {
      correctChars += word.length;
    });
    sortedEnteredWords.incorrectEntered.forEach((word, wordInd) => {
      [...word].forEach((letter, letterInd) => {
        if (
          letter ===
          sortedEnteredWords.incorrectExpected[wordInd].substring(
            letterInd,
            letterInd + 1
          )
        ) {
          correctChars++;
        }
      });
    });
    const charAcc: number = Math.round(
      (correctChars / (totalChars + Number.EPSILON)) * 100
    );

    // Calculate total attempted words.
    const totalWords: number =
      sortedEnteredWords.correct.length +
      sortedEnteredWords.incorrectEntered.length;

    // Calculate word accuracy.
    const wordAcc: number = Math.round(
      (sortedEnteredWords.correct.length / (totalWords + Number.EPSILON)) * 100
    );

    // Count incorrect words.
    const incorrWordsCount: number = sortedEnteredWords.incorrectEntered.length;

    // Make a list of incorrect words.
    const incorrWords: string = sortedEnteredWords.incorrectExpected.join(", ");

    // Calculate typed words per minute, rounded to integer.
    // https://www.speedtypingonline.com/typing-equations
    const wordsPerMin: number = Math.round(
      (totalChars / 5 - incorrWordsCount) / (settingsCtx.TestLength / 60)
    );

    setTotalEnteredChars(totalChars);
    setCharacterAccuracy(charAcc);
    setTotalWordsAttempted(totalWords);
    setWordAccuracy(wordAcc);
    wordsPerMin > 0 ? setWpm(wordsPerMin) : setWpm(0);
    setIncorrectWordsCount(incorrWordsCount);
    setIncorrectWords(incorrWords);
  }, [
    countCharsInArrayOfWords,
    settingsCtx.TestLength,
    sortedEnteredWords.correct,
    sortedEnteredWords.incorrectEntered,
    sortedEnteredWords.incorrectExpected,
  ]);

  useEffect(() => {
    if (testConcluded) {
      calculateTestResults();
    }
  }, [testConcluded, sortedEnteredWords, calculateTestResults]);

  // Reset scores when testConcluded becomes false.
  useEffect(() => {
    if (!testConcluded) {
      setTotalEnteredChars(0);
      setCharacterAccuracy(0);
      setTotalWordsAttempted(0);
      setWordAccuracy(0);
      setWpm(0);
      setIncorrectWordsCount(0);
      setIncorrectWords("");
      setHiddenWordsCount(0);
      setSortedEnteredWords({
        correct: [],
        incorrectEntered: [],
        incorrectExpected: [],
      });
    }
  }, [testConcluded]);

  const [hiddenWordsCount, setHiddenWordsCount] = useState<number>(0);
  const [newWordsCount, setNewWordsCount] = useState<number>(0);

  return (
    <TypeTestContext.Provider
      value={{
        testWordsVisibleCount: testWordsVisibleCount,
        testInProgress: testInProgress,
        setTestInProgress: setTestInProgress,
        testConcluded: testConcluded,
        setTestConcluded: setTestConcluded,
        sortedEnteredWords: sortedEnteredWords,
        setSortedEnteredWords: setSortedEnteredWords,
        totalEnteredChars: totalEnteredChars,
        characterAccuracy: characterAccuracy,
        totalWordsAttempted: totalWordsAttempted,
        wordAccuracy: wordAccuracy,
        wpm: wpm,
        incorrectWordsCount: incorrectWordsCount,
        incorrectWords: incorrectWords,
        hiddenWordsCount: hiddenWordsCount,
        setHiddenWordsCount: setHiddenWordsCount,
        newWordsCount: newWordsCount,
        setNewWordsCount: setNewWordsCount,
      }}
    >
      {children}
    </TypeTestContext.Provider>
  );
};

export default TypeTestContext;
