import { useContext } from "react";

import * as S from "./TestText.styles";
import { TestTextProps } from "./TestText.interfaces";

import FocusContext from "../../../context/focus-context";

const TestText = ({ words, animate }: TestTextProps): JSX.Element => {
  const focusCtx = useContext(FocusContext);
  return (
    <S.Wrapper>
      {words.map((word, wordInd) => {
        return (
          <S.Word key={wordInd} data-word={word.join("")}>
            {word.map((letter, letterInd) => {
              return <S.Letter key={letterInd} focused={focusCtx.windowIsFocused}>{letter}</S.Letter>;
            })}
          </S.Word>
        );
      })}
      <S.Caret animate={animate} focused={focusCtx.windowIsFocused}/>
      <S.FocusLostMessage focused={focusCtx.windowIsFocused}>
        Focus lost. Click anywhere to focus!
      </S.FocusLostMessage>
    </S.Wrapper>
  );
};

export default TestText;
