import * as UserPageStyles from "./UserPage.styles";
import { UserPageProps } from "./UserPage.interfaces";

import { PageContainer as Container } from "../../components/UI/Container.styles";
import PageTitle from "../../components/UI/PageTitle.styles";
import PageTagline from "../../components/UI/PageTagline.styles";

const UserPage = ({}: UserPageProps): JSX.Element => {
  const S = { ...UserPageStyles, Container, PageTitle, PageTagline };

  return (
    <S.Container>
      <S.PageTitle>User</S.PageTitle>
      <S.PageTagline>
        Welcome to your user page!
      </S.PageTagline>
    </S.Container>
  );
};

export default UserPage;
