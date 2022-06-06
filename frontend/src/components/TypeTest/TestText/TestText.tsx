import { useContext, useEffect, useRef, useState } from "react";

import * as S from "./TestText.styles";
import { TestTextProps } from "./TestText.interfaces";

import WindowContext from "../../../context/window-context";

const TestText = ({
  words,
  animate,
  enteredWords,
  inputVal,
}: TestTextProps): JSX.Element => {
  const windowCtx = useContext(WindowContext);

  let currentWord = useRef<HTMLElement>(null);

  const [currentWordPos, setCurrentWordPos] = useState<{
    x: number;
    y: number;
  }>({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    if (currentWord.current) {
      setCurrentWordPos({
        x: currentWord.current.offsetLeft,
        y: currentWord.current.offsetTop,
      });
    }
  }, [currentWord, inputVal, windowCtx.windowWidth]);

  return (
    <S.Wrapper>
      {words.map((word, wordInd) => {
        return (
          <S.Word
            key={wordInd}
            data-word={word.join("")}
            ref={wordInd === enteredWords.length ? currentWord : null}
          >
            {word.map((letter, letterInd) => {
              return (
                <S.Letter key={letterInd} focused={windowCtx.windowIsFocused}>
                  {letter}
                </S.Letter>
              );
            })}
          </S.Word>
        );
      })}
      <S.Caret
        focused={windowCtx.windowIsFocused}
        currentWordPos={currentWordPos}
        transitionTransform={inputVal.length !== 0}
        animate={animate}
        offsetX={inputVal.length}
      />
      <S.FocusLostMessage focused={windowCtx.windowIsFocused}>
        Focus lost. Click anywhere to focus!
      </S.FocusLostMessage>
    </S.Wrapper>
  );
};

export default TestText;
