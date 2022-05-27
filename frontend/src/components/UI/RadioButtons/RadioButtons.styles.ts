import styled from "styled-components";

export const Fieldset = styled.fieldset`
  border: none;
`;

export const Legend = styled.legend`
  position: absolute;
  visibility: hidden;
`;

export const Label = styled.label<{ checked: boolean }>`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  padding: 0.5rem 0 0.5rem 0.5rem;
  color: ${(props) =>
    props.checked ? props.theme.primary : props.theme.highlight};
  font-size: 0.8125rem;
  font-weight: 600;
  letter-spacing: 0.5px;
  cursor: pointer;
  transition: color 0.15s ease-out;

  &::after {
    content: "";
    width: 1rem;
    height: 1rem;
    background-color: ${(props) =>
      props.checked ? props.theme.backgroundTertiary : props.theme.highlight};
    border: 3px solid;
    border-color: ${(props) =>
      props.checked ? props.theme.primary : props.theme.highlight};
    display: inline-block;
    margin-left: 0.5rem;
    border-radius: 50%;
    transition: all 0.15s ease-out;
  }
`;

export const RadioButton = styled.input`
  appearance: none;
`;
