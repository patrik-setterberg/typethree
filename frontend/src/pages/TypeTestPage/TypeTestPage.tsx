import { TypeTestPageProps } from "./TypeTestPage.interfaces";

import { PageContainer as Container } from "../../components/UI/Container.styles";

import TypeTest from "../../components/TypeTest/TypeTest";
import ScoreScreen from "../../components/ScoreScreen/ScoreScreen";

import useTypeTestContext from "../../hooks/useTypeTestContext";

const TypeTestPage = ({}: TypeTestPageProps): JSX.Element => {
  const S = { Container };

  const typeTestCtx = useTypeTestContext();

  return (
    <S.Container>
      {typeTestCtx.testConcluded ? <ScoreScreen /> : <TypeTest />}
    </S.Container>
  );
};

export default TypeTestPage;
