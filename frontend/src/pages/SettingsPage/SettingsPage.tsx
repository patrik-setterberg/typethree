import * as SettingsPageStyles from "./SettingsPage.styles";
import { SettingsPageProps } from "./SettingsPage.interfaces";

import { PageContainer as Container } from "../../components/UI/Container.styles";
import PageTitle from "../../components/UI/PageTitle.styles";
import PageTagline from "../../components/UI/PageTagline.styles";
import SettingsCategory from "./SettingsCategory/SettingsCategory";
import SettingsItem from "./SettingsItem/SettingsItem";

const SettingsPage = ({}: SettingsPageProps): JSX.Element => {
  const S = { ...SettingsPageStyles, Container, PageTitle, PageTagline };

  const testFunc = () => {
    console.log("togglin");
  };

  return (
    <S.Container>
      <S.PageTitle>Settings</S.PageTitle>
      <S.PageTagline>
        Change settings here because you have the power.
      </S.PageTagline>
      <SettingsCategory title="Site preferences">
        <SettingsItem
          togglerId="toggler1"
          togglerLabel="Toggler 1"
          togglerFunc={testFunc}
        >
          <span>Slap the toggler to change the setting. Slap the toggler to change the setting. Slap the toggler to change the setting. </span>
        </SettingsItem>
        <SettingsItem
          togglerId="toggler2"
          togglerLabel="Toggler number 2"
          togglerFunc={testFunc}
        >
          <span>Hi</span>
        </SettingsItem>
        <SettingsItem
          togglerId="toggler3"
          togglerLabel="Toggler 3"
          togglerFunc={testFunc}
        >
          <span>Hi</span>
        </SettingsItem>
      </SettingsCategory>
    </S.Container>
  );
};

export default SettingsPage;
