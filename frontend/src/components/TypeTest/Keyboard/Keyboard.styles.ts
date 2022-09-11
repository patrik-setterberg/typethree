import styled, { css, Theme } from "styled-components";
import media from "../../../globals/media-breakpoints";
import { rgba } from "../../../util/rgba";

export const Keyboard = styled.div`
  opacity: 0;
  width: fit-content;
  font-size: 18px;
  margin: 3rem auto 1rem;
  transition: opacity 0.2s ease-out;

  @media ${media.large} {
    opacity: 0.8;
  }
`;

export const Key = styled.span<{
  pressed: boolean;
  incorrect: boolean;
  theme: Theme;
}>`
  display: inline-flex;
  border: 1px solid #777;
  border-radius: 0.5rem;
  padding: 1ch 1.5ch;
  line-height: 1;
  align-items: center;
  position: relative;
  pointer-events: none;
  color: ${({ theme }) => rgba(theme.primary, 0.7)};
  box-shadow: none;
  transition: all 0.03s ease-out;

  & + & {
    margin-left: 0.25ch;
  }

  ${({ pressed }) =>
    pressed &&
    css`
      color: ${({ theme }) => theme.highlight};
      border-color: ${({ theme }) => theme.highlight};
      background-color: ${({ theme }) => rgba(theme.primary, 0.15)};
    `};

  ${({ pressed, incorrect }) =>
    pressed &&
    incorrect &&
    css`
      color: ${({ theme }) => theme.error};
      border-color: ${({ theme }) => theme.error};
      background-color: ${({ theme }) => rgba(theme.error, 0.1)};
    `};
`;

export const Row = styled.div<{
  iso?: boolean;
  LShiftPressed?: boolean;
  RShiftPressed?: boolean;
  theme: Theme;
}>`
  display: flex;
  flex-wrap: nowrap;

  // TOP ROW
  &:nth-child(1) {
    margin-left: 7ch;
  }

  // HOME ROW
  &:nth-child(2) {
    margin-left: 8ch;

    // F AND J KEY BUMPS/RIDGES
    & > span:nth-child(4)::after,
    & > span:nth-child(7)::after {
      content: "";
      display: block;
      position: absolute;
      width: 1ch;
      border-bottom: 2px solid ${({ theme }) => theme.highlight};
      bottom: 0.5ch;
      opacity: 0.5;
    }
  }

  // BOTTOM ROW
  &:nth-child(3) {
    // LEFT SHIFT
    & > span:first-child {
      padding-right: ${({ iso }) => (iso ? "2.5ch" : "7.25ch")};

      ${({ LShiftPressed }) =>
        LShiftPressed &&
        css`
          color: ${({ theme }) => theme.highlight};
          border-color: ${({ theme }) => theme.highlight};
          background-color: ${({ theme }) => rgba(theme.primary, 0.15)};
        `};
    }

    // RIGHT SHIFT
    & > ${Key}:last-child {
      padding-left: 9.5ch;

      ${({ RShiftPressed }) =>
        RShiftPressed &&
        css`
          color: ${({ theme }) => theme.highlight};
          border-color: ${({ theme }) => theme.highlight};
          background-color: ${({ theme }) => rgba(theme.primary, 0.15)};
        `};
    }
  }

  // SPACE BAR
  &:nth-child(4) > *:first-child {
    padding-left: 14ch;
    padding-right: 14ch;
    margin-left: 16.5ch;
  }

  & + & {
    margin-top: 0.35ch;
  }
`;
