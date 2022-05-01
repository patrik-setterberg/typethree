import styled from "styled-components";

export const SettingsCategory = styled.section`
  width: 100%;
  margin-top: calc(var(--default-spacing) * 2);
  padding-top: calc(var(--default-spacing) * 2);
`;

export const SettingsCategoryTitle = styled.h2`
  font-size: 1.25rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding-bottom: 0.5rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  color: ${(props) => props.theme.primary};
`;

export const SettingsList = styled.ul`
  list-style-type: none;
`;
