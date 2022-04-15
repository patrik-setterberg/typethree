import * as S from "./Branding.styles";
import { Link } from "react-router-dom";

const Branding = (): JSX.Element => {
  return (
    <S.Branding>
      <Link to="/" aria-label="Home">
        <span>type</span>
        <span>|</span>
        <span>three</span>
      </Link>
    </S.Branding>
  );
};

export default Branding;
