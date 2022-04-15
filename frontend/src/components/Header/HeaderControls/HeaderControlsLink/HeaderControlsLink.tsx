import * as StyledComponents from "../HeaderControlsNavElem.styles";
import * as StyledLink from "./HeaderControlsLink.styles";
import { HeaderControlsLinkProps } from "./HeaderControlsLink.interfaces";

const HeaderControlsLink = ({linkTo, title, children}: HeaderControlsLinkProps): JSX.Element => {
  const S = {...StyledComponents, ...StyledLink};
  return (
    <S.Wrapper>
      <S.HeaderControlsLink to={linkTo} aria-label={title}>
        {children}
      </S.HeaderControlsLink>
      <S.HeaderControlsElemTitle>{title}</S.HeaderControlsElemTitle>
    </S.Wrapper>
  );
}

export default HeaderControlsLink;