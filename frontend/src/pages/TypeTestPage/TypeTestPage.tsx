import { TypeTestPageProps } from "./TypeTestPage.interfaces";

import { PageContainer as Container } from "../../components/UI/Container.styles";

import TypeTest from "../../components/TypeTest/TypeTest";

const TypeTestPage = ({}: TypeTestPageProps): JSX.Element => {
  const S = { Container };
  return (
    <S.Container>
      <TypeTest />
    </S.Container>
  );
}

export default TypeTestPage;