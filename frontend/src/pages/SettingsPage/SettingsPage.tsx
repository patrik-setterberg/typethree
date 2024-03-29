import { useCallback, useMemo } from "react";

import useSettingsContext from "../../hooks/useSettingsContext";

import * as SettingsPageStyles from "./SettingsPage.styles";
import {
  SettingsPageProps,
  RadioButtonsItems,
} from "./SettingsPage.interfaces";

import Layouts from "../../assets/misc/KeyboardLayouts";

import { PageContainer as Container } from "../../components/UI/Container.styles";
import { ButtonContainer } from "./SettingsItem/SettingsItem.styles";
import PageTitle from "../../components/UI/PageTitle.styles";
import PageTagline from "../../components/UI/PageTagline.styles";
import SettingsCategory from "./SettingsCategory/SettingsCategory";
import SettingsItem from "./SettingsItem/SettingsItem";
import Button from "../../components/UI/Button/Button";
import RadioButtons from "../../components/UI/RadioButtons/RadioButtons";
import ToggleSwitch from "../../components/UI/ToggleSwitch/ToggleSwitch";

const SettingsPage = ({}: SettingsPageProps): JSX.Element => {
  const S = {
    ...SettingsPageStyles,
    Container,
    PageTitle,
    PageTagline,
    ButtonContainer,
  };

  const settingsCtx = useSettingsContext();

  const testLengthSettings: Array<RadioButtonsItems> = useMemo<
    RadioButtonsItems[]
  >(() => {
    return [
      { value: 15, label: "15 sec" },
      { value: 30, label: "30 sec" },
      { value: 60, label: "60 sec" },
    ];
  }, []);

  const testWordsSettings: Array<RadioButtonsItems> = useMemo<
    RadioButtonsItems[]
  >(() => {
    return [
      { value: "eng1k", label: "English" },
      { value: "swe1k", label: "Swedish" },
    ];
  }, []);

  const keyboardSettings: Array<RadioButtonsItems> = useMemo(() => {
    let items: Array<RadioButtonsItems> = [];
    for (const [key, value] of Object.entries(Layouts)) {
      items.push({ value: key, label: value.name });
    }
    return items;
  }, []);

  const resetToDefaults = useCallback((): void => {
    settingsCtx.setTestLength(settingsCtx.defaultSettings.TestLength);
    settingsCtx.setTestWords(settingsCtx.defaultSettings.TestWords);
    settingsCtx.setShowKeyboard(settingsCtx.defaultSettings.ShowKeyboard);
    settingsCtx.setKeyboardLayout(settingsCtx.defaultSettings.KeyboardLayout);
  }, [settingsCtx]);

  /// TEMP
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
          <span>Slap the toggler to change the setting.</span>
          <ToggleSwitch
            Id="toggler1"
            labelText="Toggler 1"
            checked={false}
            onChangeFunc={testFunc}
          />
        </SettingsItem>
        <SettingsItem>
          <span>
            Slap the toggler to change the setting. Slap the toggler to change
            the setting.
          </span>
          <S.ButtonContainer>
            <Button
              onClickFunc={() => console.log("hehehehe")}
              label="button"
              ariaLabel="button"
              isActive={true}
            />
            <Button
              onClickFunc={() => console.log("hehehehe")}
              label="button"
              ariaLabel="button"
              isActive={false}
            />
          </S.ButtonContainer>
        </SettingsItem>
        <SettingsItem>
          <span>Slap the toggler to change the setting.</span>
          <ToggleSwitch
            Id="toggler3"
            labelText="Toggler 3"
            checked={false}
            onChangeFunc={testFunc}
          />
        </SettingsItem>
      </SettingsCategory>
      <SettingsCategory title="Type_test_options;">
        <SettingsItem>
          {/* TEST LENGTH */}
          <span>Test length.</span>
          <RadioButtons
            name="test_length"
            legend="Test lengtu"
            changeFunc={settingsCtx.setTestLength}
            items={testLengthSettings}
            currentValue={settingsCtx.TestLength}
          />
        </SettingsItem>
        <SettingsItem>
          {/* TEST WORDS LANGUAGE */}
          <span>Test words language.</span>
          <RadioButtons
            name="testwords_language"
            legend="Testwords language"
            changeFunc={settingsCtx.setTestWords}
            items={testWordsSettings}
            currentValue={settingsCtx.TestWords}
          />
        </SettingsItem>
        <SettingsItem>
          {/* TOGGLE KEYBOARD */}
          <span>Show keyboard.</span>
          <ToggleSwitch
            Id="show_keyboard"
            labelText="Keyboard"
            onChangeFunc={settingsCtx.setShowKeyboard}
            checked={settingsCtx.ShowKeyboard}
          />
        </SettingsItem>
        <SettingsItem>
          {/* KEYBOARD LAYOUT */}
          <span>Keyboard layout.</span>
          <RadioButtons
            name="keyboard_layout"
            legend="Keyboard layout"
            changeFunc={settingsCtx.setKeyboardLayout}
            items={keyboardSettings}
            currentValue={settingsCtx.KeyboardLayout}
          />
        </SettingsItem>
        <SettingsItem>
          <span>Slap the toggler to change the setting.</span>
          <ButtonContainer>
            <Button
              onClickFunc={() => console.log("hehehehe")}
              label="button"
              ariaLabel="button"
              isActive={true}
            />
            <Button
              onClickFunc={() => console.log("hehehehe")}
              label="button"
              ariaLabel="button"
              isActive={false}
            />
          </ButtonContainer>
        </SettingsItem>
      </SettingsCategory>
      <SettingsCategory title="Reset_to_defaults;">
        <SettingsItem>
          <span>Reset all settings to default values.</span>
          <S.ButtonContainer>
            <Button
              onClickFunc={resetToDefaults}
              label="Reset"
              ariaLabel="Reset settings to defaults"
              isActive={false}
            />
          </S.ButtonContainer>
        </SettingsItem>
      </SettingsCategory>
    </S.Container>
  );
};

export default SettingsPage;
