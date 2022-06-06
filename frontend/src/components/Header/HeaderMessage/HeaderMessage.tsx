import { useContext } from "react";

import WindowContext from "../../../context/window-context";
import HeaderMessageProps from "./HeaderMessage.interfaces";
import * as S from "./HeaderMessage.styles";

const HeaderMessage = ({}: HeaderMessageProps): JSX.Element => {

  const windowCtx = useContext(WindowContext);

  return (
    <S.Wrapper>
      <S.HeaderMessage>
        {windowCtx.windowIsFocused ? 'focused' : 'not focused'}
      </S.HeaderMessage>
    </S.Wrapper>
  );
};

export default HeaderMessage;
