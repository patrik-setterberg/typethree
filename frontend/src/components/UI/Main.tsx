import { useEffect } from "react";

import * as S from "./Main.styles";

interface Props {
  children: React.ReactNode;
}

const Main = ({children}: Props): JSX.Element => {

  const keyPressHandler = (e: KeyboardEvent) => {
    console.log(e.key);

    if (e.key === 'Hyper') {
      console.log('Woah!');
    }
  }

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
    };
  }, []);

  return (
    <S.Main>{children}</S.Main>
  );
}

export default Main;