import * as S from "./Main.styles";

interface MainProps {
  children: React.ReactNode;
}

const Main = ({ children }: MainProps): JSX.Element => {
  return <S.Main>{children}</S.Main>;
};

export default Main;
