import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  margin-top: 2rem;
`;

export const Input = styled.input`
  opacity: 0;

  /* &:focus ~ label {
    outline: 2px solid ${props => props.theme.highlight};
    outline-offset: 5px;
    outline-width: 2px;
  } */

  &:checked + label::after {
    left: calc(100% - 2px);
    transform: translateX(-100%);
  }

  &:checked + label {
    font-weight: 700;
    background-color: ${(props) => props.theme.primary};
    color: ${(props) => props.theme.primary};
  }
`;

const LABEL_LETTER_SPACING = 0.65; // px
const LABEL_LETTER_SPACING_HOVER = 1;

export const Label = styled.label<{ labelTextLen: number }>`
  display: inline-block;
  height: 1.5rem;
  width: 2.75rem;
  border-radius: 1.5rem;
  cursor: pointer;
  background-color: ${(props) => props.theme.highlight};
  text-indent: calc(
    ${(props) => props.labelTextLen * -1}ch +
      (${(props) => props.labelTextLen} * ${LABEL_LETTER_SPACING}px * -1) - 1ch
  );
  font-size: 0.8125rem;
  font-weight: 600;
  line-height: 1.8;
  letter-spacing: ${LABEL_LETTER_SPACING}px;
  text-transform: uppercase;
  color: ${(props) => props.theme.highlight};
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.15s ease-out;

  &::after {
    content: "";
    position: absolute;
    top: 0.1rem;
    left: 0.125rem;
    height: 1.3rem;
    width: 1.3rem;
    border-radius: 50%;
    background-color: ${(props) => props.theme.backgroundTertiary};
    transition: all 0.1s ease-out;
  }

  &:hover {
    letter-spacing: ${LABEL_LETTER_SPACING_HOVER}px;
    text-indent: calc(
    ${(props) => props.labelTextLen * -1}ch +
      (${(props) => props.labelTextLen} * ${LABEL_LETTER_SPACING_HOVER}px * -1) - 1ch
  );
  }
`;
