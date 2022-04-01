import * as S from "./Main.styles";

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = ({children}) => {
  return (
    <S.Main>{children}</S.Main>
  );
}

export default Main;