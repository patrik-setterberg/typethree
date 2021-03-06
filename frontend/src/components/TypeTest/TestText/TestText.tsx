import { useContext, useEffect, useRef, useState } from "react";

import * as S from "./TestText.styles";
import { TestTextProps } from "./TestText.interfaces";

import WindowContext from "../../../context/window-context";

const TestText = ({
  words,
  animate,
  enteredWords,
  inputVal,
  backspacePressed,
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
            focused={windowCtx.windowIsFocused}
            // Highlight incorrect and incomplete words.
            incorrect={
              enteredWords[wordInd] !== undefined &&
              enteredWords[wordInd].join("") !== words[wordInd].join("")
            }
          >
            {word.map((letter, letterInd) => {
              return (
                <S.Letter
                  key={letterInd}
                  focused={windowCtx.windowIsFocused}
                  // Highlight correctly entered letters.
                  entered={
                    (wordInd < enteredWords.length &&
                      enteredWords[wordInd][letterInd] !== undefined) ||
                    (wordInd === enteredWords.length &&
                      letterInd < inputVal.length)
                  }
                  // Highlight letters in a past word which were not entered.
                  missed={
                    wordInd < enteredWords.length &&
                    enteredWords[wordInd][letterInd] === undefined
                  }
                  // Highlight letters which were entered but incorrect.
                  incorrect={
                    (enteredWords[wordInd] !== undefined &&
                      enteredWords[wordInd][letterInd] !== letter &&
                      letterInd < enteredWords[wordInd].length) ||
                    (wordInd === enteredWords.length &&
                      inputVal.length > letterInd &&
                      inputVal[letterInd] !== letter)
                  }
                >
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
        transitionTransform={inputVal.length !== 0 || backspacePressed}
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
