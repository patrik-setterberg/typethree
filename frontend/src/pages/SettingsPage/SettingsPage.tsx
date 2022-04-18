import * as SettingsPageStyles from "./SettingsPage.styles";
import { SettingsPageProps } from "./SettingsPage.interfaces";

import { PageContainer as Container } from "../../components/UI/Container.styles";
import PageTitle from "../../components/UI/PageTitle.styles";
import PageTagline from "../../components/UI/PageTagline.styles";

const SettingsPage = ({}: SettingsPageProps): JSX.Element => {
  const S = { ...SettingsPageStyles, Container, PageTitle, PageTagline };

  return (
    <S.Container>
      <S.PageTitle>
        Settings
      </S.PageTitle>
      <S.PageTagline>
        Change settings here because you have the power.
      </S.PageTagline>
    </S.Container>
  );
};

export default SettingsPage;
