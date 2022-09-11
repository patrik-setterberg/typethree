import styled, { Theme } from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Legend = styled.legend`
  position: absolute;
  visibility: hidden;
`;

export const Label = styled.label<{
  checked: boolean;
  theme: Theme;
}>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0 0 0.5rem 0.5rem;
  color: ${({ checked, theme }) => (checked ? theme.primary : theme.highlight)};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: all 0.15s ease-out;

  &::after {
    content: "";
    width: 1.125rem;
    height: 1.125rem;
    background-color: ${({ checked, theme }) =>
      checked ? theme.backgroundTertiary : theme.highlight};
    border: 2px solid;
    border-color: ${({ checked, theme }) =>
      checked ? theme.primary : theme.highlight};
    display: inline-block;
    margin-left: 0.5rem;
    border-radius: 50%;
    transition: all 0.15s ease-out;
  }

  &:hover {
    letter-spacing: 0.6px;

    &::after {
      transform: scale(1.1);
    }
  }

  & + & {
    margin-top: 0.125rem;
    padding-top: 0.5rem;
  }
`;

export const RadioButton = styled.input`
  appearance: none;
`;
