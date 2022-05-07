import styled from "styled-components";

export const SettingsCategory = styled.section`
  width: 100%;
  margin-top: var(--default-spacing);
`;

export const SettingsCategoryTitle = styled.h2`
  position: relative;
  font-size: 1rem;
  letter-spacing: 0.75px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2); /* theme variable somehow pls */
  padding-bottom: 0.375rem;
  margin: 0 var(--default-spacing);
  color: ${(props) => props.theme.primary};

  &::before {
    content: '»';
    display: inline-block;
    background-color: ${props => props.theme.highlight};
    color: ${props => props.theme.backgroundSecondary};
    font-weight: bold;
    font-size: 1.5em;
    line-height: 0.75;
    padding: 0 1rem 0.25rem 1rem;
    margin-right: 0.625rem;
    transition: all 2s ease;
  }

  ${SettingsCategory}:hover &::before {
      background-color: ${props => props.theme.primary};
      padding-right: 0.75rem;
      padding-left: 1.25rem;
    }
`;

export const SettingsList = styled.ul`
  list-style-type: none;
`;
