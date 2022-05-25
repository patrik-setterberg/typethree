import * as S from "./Main.styles";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props): JSX.Element => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
