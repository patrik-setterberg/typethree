import styled from "styled-components";

export const SettingsCategory = styled.section`
  width: 100%;
  background: linear-gradient(
    150deg,
    transparent,
    ${(props) => props.theme.primary005}
  );
  border-top: 1px solid ${(props) => props.theme.primary01};
  border-bottom: 1px solid ${(props) => props.theme.primary005};

  & + & {
    margin-top: calc(var(--default-spacing) * 2);
  }
`;

export const SettingsCategoryTitle = styled.h2`
  position: relative;
  font-size: 1rem;
  letter-spacing: 0.75px;
  padding-bottom: 0.375rem;
  padding: calc(var(--default-spacing) * 1.5) var(--default-spacing);
  color: ${(props) => props.theme.primary};
  transition: background-color 1s ease-in-out, color 0.5s ease-out;

  &::before {
    content: "»";
    display: inline-block;
    background-color: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.backgroundTertiary};
    font-weight: bold;
    font-size: 1.5em;
    line-height: 0.75;
    padding: 0 1rem 0.25rem 1rem;
    margin-right: 0.625rem;
    transition: padding-right 1.5s ease-out, padding-left 1.5s ease-out, background-color 0.15s ease-out;
  }

  ${SettingsCategory}:hover & {
    background-color: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.backgroundTertiary};

    &::before {
      background-color: transparent;
      padding-right: 0.5rem;
      padding-left: 1.5rem;
    }
  }
`;

export const SettingsList = styled.ul`
  list-style-type: none;
`;
