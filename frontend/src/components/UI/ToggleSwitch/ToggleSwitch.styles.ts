import styled, { Theme } from "styled-components";

export const Wrapper = styled.div<{ labelTextLen: number }>`
  position: relative;
  font-size: 0.8125rem;
  margin-left: ${({ labelTextLen }) => labelTextLen}ch;
  margin-bottom: 0.75rem;
  padding-left: 4rem;
`;

export const Input = styled.input<{
  theme: Theme;
}>`
  opacity: 0;

  &:checked + label::after {
    transform: translateX(calc(100%));
  }

  &:checked + label {
    font-weight: 700;
    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.primary};
  }
`;

const LABEL_LETTER_SPACING = 0.5; // px
const LABEL_LETTER_SPACING_HOVER = 0.65;

export const Label = styled.label<{
  labelTextLen: number;
  theme: Theme;
}>`
  display: inline-block;
  height: 1.75rem;
  width: 3.25rem;
  border-radius: 1.75rem;
  cursor: pointer;
  background-color: ${({ theme }) => theme.highlight};
  text-indent: calc(
    ${({ labelTextLen }) => labelTextLen * -1}ch +
      (${({ labelTextLen }) => labelTextLen} * ${LABEL_LETTER_SPACING}px * -1) -
      1ch
  );
  font-weight: 600;
  line-height: 2.2;
  letter-spacing: ${LABEL_LETTER_SPACING}px;
  text-transform: uppercase;
  color: ${({ theme }) => theme.highlight};
  position: absolute;
  right: 0;
  top: 0;
  transition: all 0.15s ease-out;

  &::after {
    content: "";
    position: absolute;
    top: 0.125rem;
    left: 0.125rem;
    height: 1.5rem;
    width: 1.5rem;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.backgroundTertiary};
    transition: all 0.1s ease-out;
  }

  &:hover {
    letter-spacing: ${LABEL_LETTER_SPACING_HOVER}px;
    text-indent: calc(
      ${({ labelTextLen }) => labelTextLen * -1}ch +
        (${({ labelTextLen }) => labelTextLen} * ${LABEL_LETTER_SPACING_HOVER}px * -1) - 1ch
    );
  }
`;
