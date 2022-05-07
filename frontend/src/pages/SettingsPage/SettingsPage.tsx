import * as SettingsPageStyles from "./SettingsPage.styles";
import { SettingsPageProps } from "./SettingsPage.interfaces";

import { PageContainer as Container } from "../../components/UI/Container.styles";
import PageTitle from "../../components/UI/PageTitle.styles";
import PageTagline from "../../components/UI/PageTagline.styles";
import SettingsCategory from "./SettingsCategory/SettingsCategory";
import SettingsItem from "./SettingsItem/SettingsItem";
import ToggleSwitch from "../../components/UI/ToggleSwitch/ToggleSwitch";
import Button from "../../components/UI/Button/Button";

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
      <SettingsCategory title="Site_preferences;">
        <SettingsItem>
          <span>Slap the toggler to change the setting. Slap the toggler to change the setting. Slap the toggler to change the setting. </span>
          <ToggleSwitch
            Id="toggler1"
            labelText="Toggler 1"
            onChangeFunc={testFunc}
          />
        </SettingsItem>
        <SettingsItem>
          <span>Slap the toggler to change the setting. Slap the toggler to change the setting. Slap the toggler to change the setting. </span>
          <Button onClickFunc={() => console.log('hehehehe')} label="button" ariaLabel="button" isActive={true}/>
          <Button onClickFunc={() => console.log('hehehehe')} label="button" ariaLabel="button" isActive={false}/>
        </SettingsItem>
        <SettingsItem>
          <span>Slap the toggler to change the setting. Slap the toggler to change the setting. Slap the toggler to change the setting. </span>
          <ToggleSwitch
            Id="toggler3"
            labelText="Toggler 3"
            onChangeFunc={testFunc}
          />
        </SettingsItem>
      </SettingsCategory>
      <SettingsCategory title="Type_test_options;">
      <SettingsItem>
          <span>Slap the toggler to change the setting. Slap the toggler to change the setting. Slap the toggler to change the setting. </span>
          <ToggleSwitch
            Id="toggler4"
            labelText="Toggler 4"
            onChangeFunc={testFunc}
          />
        </SettingsItem>
        <SettingsItem>
          <span>Slap the toggler to change the setting. Slap the toggler to change the setting. Slap the toggler to change the setting. </span>
          <Button onClickFunc={() => console.log('hehehehe')} label="button" ariaLabel="button" isActive={true}/>
          <Button onClickFunc={() => console.log('hehehehe')} label="button" ariaLabel="button" isActive={false}/>
        </SettingsItem>
      </SettingsCategory>
    </S.Container>
  );
};

export default SettingsPage;
