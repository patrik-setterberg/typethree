import React, { useCallback, useEffect, useState } from "react";

import {
  TypeTestContextValues,
  HighScoreCookieValues,
  SortedEnteredWordsValues,
} from "./type-test-context.interfaces";

import useSettingsContext from "../../hooks/useSettingsContext";

import { formatDate } from "../../util/formatDate";

// Cookie things.
const SCORE_COOKIE_NAME: string = "HIGHSCORE";
const DATESTAMP_COOKIE_NAME: string = "DATESTAMP";
const COOKIE_MAX_AGE: number = 2592000; // 60*60*24*30 = 30 days.

const checkCookie = (cookieName: string): boolean => {
  return document.cookie
    .split(";")
    .some((item) => item.trim().startsWith(cookieName));
};

const checkHighScoreCookie = (cookieName: string): number => {
  let score: number = 0;
  if (checkCookie(cookieName)) {
    const scoreCookie: string | undefined = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith(cookieName));

    if (scoreCookie && !isNaN(Number(scoreCookie.split("=")[1]))) {
      score = Number(scoreCookie.split("=")[1]);
    }
  }

  return score;
};

const checkDatestampCookie = (cookieName: string): string => {
  let datestamp: string = "";
  if (checkCookie(cookieName)) {
    const datestampCookie: string | undefined = document.cookie
      .split(";")
      .find((row) => row.trim().startsWith(cookieName));

    if (datestampCookie) {
      datestamp = datestampCookie.split("=")[1];
    }
  }
  return datestamp;
};

const TypeTestContext = React.createContext<TypeTestContextValues | undefined>(
  undefined
);

export const TypeTestContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  const settingsCtx = useSettingsContext();

  const TESTWORDS_VISIBLE_COUNT: number = 32;

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
  const [highScore, setHighScore] = useState<HighScoreCookieValues>({
    score: checkHighScoreCookie(SCORE_COOKIE_NAME),
    datestamp: checkDatestampCookie(DATESTAMP_COOKIE_NAME),
  });
  const [hiddenWordsCount, setHiddenWordsCount] = useState<number>(0);
  const [newWordsCount, setNewWordsCount] = useState<number>(0);

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

  useEffect(() => {
    if (wpm > highScore.score) {
      setHighScore({ score: wpm, datestamp: formatDate(Date.now()) });
    }
  }, [wpm, highScore.score]);

  useEffect(() => {
    if (highScore.score > 0) {
      document.cookie = `${SCORE_COOKIE_NAME}=${highScore.score};max-age=${COOKIE_MAX_AGE};`;
      document.cookie = `${DATESTAMP_COOKIE_NAME}=${highScore.datestamp};max-age=${COOKIE_MAX_AGE}`;
    }
  }, [highScore]);

  return (
    <TypeTestContext.Provider
      value={{
        testWordsVisibleCount: TESTWORDS_VISIBLE_COUNT,
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
        highScore: highScore,
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
