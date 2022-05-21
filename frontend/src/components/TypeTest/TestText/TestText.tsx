import { Container } from "../../UI/Container.styles";
import * as TestTextStyles from "./TestText.styles";
import { TestTextProps } from "./TestText.interfaces";

const TestText = ({ words }: TestTextProps): JSX.Element => {
  const S = { Container, ...TestTextStyles };

  return (
    <S.Container>
      <S.Wrapper>
        {words.map((word, wordInd) => {
          return (
            <S.Word key={wordInd} data-word={word.join('')}>
              {word.map((letter, letterInd) => {
                return <S.Letter key={letterInd}>{letter}</S.Letter>;
              })}
            </S.Word>
          );
        })}
      </S.Wrapper>
    </S.Container>
  );
};

export default TestText;
