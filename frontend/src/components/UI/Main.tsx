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

  const blurHandler = () => {
    console.log('Window blurred.');
  }

  const focusHandler = () => {
    console.log('Window focused.');
  }

  useEffect(() => {
    window.addEventListener("keydown", keyPressHandler);
    window.addEventListener("focus", focusHandler);
    window.addEventListener("blur", blurHandler);
    return () => {
      window.removeEventListener("keydown", keyPressHandler);
      window.removeEventListener("focus", focusHandler);
      window.removeEventListener("blur", blurHandler);
    };
  }, []);

  return (
    <S.Main>{children}</S.Main>
  );
}

export default Main;