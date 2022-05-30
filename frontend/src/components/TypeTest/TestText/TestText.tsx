import * as S from "./TestText.styles";
import { TestTextProps } from "./TestText.interfaces";

const TestText = ({ words, animate }: TestTextProps): JSX.Element => {
  return (
    <S.Wrapper>
      {words.map((word, wordInd) => {
        return (
          <S.Word key={wordInd} data-word={word.join("")}>
            {word.map((letter, letterInd) => {
              return <S.Letter key={letterInd}>{letter}</S.Letter>;
            })}
          </S.Word>
        );
      })}
      <S.Caret animate={animate} />
    </S.Wrapper>
  );
};

export default TestText;
