import { useContext } from "react";
import { Link } from "react-router-dom";

import AuthContext from "../../../../context/auth-context";

import { HeaderControlsLinkProps } from "./HeaderControlsLink.interfaces";
import * as S from "./HeaderControlsLink.styles";

const HeaderControlsLink = ({
  linkTo,
  title,
  isUserLink = false,
  children,
}: HeaderControlsLinkProps): JSX.Element => {

  const authCtx = useContext(AuthContext);

  return (
    <S.Wrapper>
      <S.HeaderControlsLinkTitle>
        <span>{title}</span>
        {isUserLink && authCtx.isLoggedIn && <Link to="/logout" aria-label="Log out">Log&nbsp;out</Link>}
      </S.HeaderControlsLinkTitle>
      <S.HeaderControlsLink to={linkTo} aria-label={title}>
        {children}
      </S.HeaderControlsLink>
    </S.Wrapper>
  );
};

export default HeaderControlsLink;
