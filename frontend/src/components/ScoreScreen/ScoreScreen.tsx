import { useEffect } from "react";

import { ScoreScreenProps } from "./ScoreScreen.interfaces";

import useTypeTestContext from "../../hooks/useTypeTestContext";
import useSettingsContext from "../../hooks/useSettingsContext";

const ScoreScreen = ({}: ScoreScreenProps): JSX.Element => {
  const typeTestCtx = useTypeTestContext();
  const settingsCtx = useSettingsContext();

  useEffect(() => {
    const handleKeypress = (e: KeyboardEvent): void => {
      if (e.key === "Enter" || e.key === "Escape") {
        e.preventDefault();
        typeTestCtx.setTestConcluded(false);
      }
    };
    window.addEventListener("keydown", handleKeypress);

    return () => {
      window.removeEventListener("keydown", handleKeypress);
    };
  }, [typeTestCtx]);

  return (
    <>
      test length: {settingsCtx.TestLength} seconds
      <br />
      wpm: {typeTestCtx.wpm}
      <br />
      High score: {typeTestCtx.highScore.score}
      {typeTestCtx.highScore.datestamp && ` (set on ${typeTestCtx.highScore.datestamp})`}
      <br />
      total entered chars: {typeTestCtx.totalEnteredChars}
      <br />
      char accuracy: {typeTestCtx.characterAccuracy}%
      <br />
      words attempted: {typeTestCtx.totalWordsAttempted}
      <br />
      word accuracy: {typeTestCtx.wordAccuracy}%
      <br />
      {typeTestCtx.incorrectWordsCount > 0 &&
        `${typeTestCtx.incorrectWordsCount} incorrect words: ${typeTestCtx.incorrectWords}`}
    </>
  );
};

export default ScoreScreen;
