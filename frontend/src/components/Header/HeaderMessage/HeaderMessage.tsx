import { useContext } from "react";

import FocusContext from "../../../context/focus-context";
import HeaderMessageProps from "./HeaderMessage.interfaces";
import * as S from "./HeaderMessage.styles";

const HeaderMessage = ({}: HeaderMessageProps): JSX.Element => {

  const FocusCtx = useContext(FocusContext);

  return (
    <S.Wrapper>
      <S.HeaderMessage>
        {FocusCtx.windowIsFocused ? 'focused' : 'not focused'}
      </S.HeaderMessage>
    </S.Wrapper>
  );
};

export default HeaderMessage;
