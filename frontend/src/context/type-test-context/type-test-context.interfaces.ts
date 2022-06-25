export interface SortedEnteredWordsValues {
  correct: string[];
  incorrectEntered: string[];
  incorrectExpected: string[];
}

export interface TypeTestContextValues {
  testInProgress: boolean;
  setTestInProgress: React.Dispatch<React.SetStateAction<boolean>>;
  testConcluded: boolean;
  setTestConcluded: React.Dispatch<React.SetStateAction<boolean>>;
  sortedEnteredWords: SortedEnteredWordsValues;
  setSortedEnteredWords: React.Dispatch<
    React.SetStateAction<SortedEnteredWordsValues>
  >;
  totalEnteredChars: number;
  characterAccuracy: number;
  totalWordsAttempted: number;
  wordAccuracy: number;
  wpm: number;
  incorrectWordsCount: number;
  incorrectWords: string;
}
