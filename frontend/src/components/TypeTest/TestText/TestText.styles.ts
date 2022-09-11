import styled, { css, keyframes, Theme } from "styled-components";
import media from "../../../globals/media-breakpoints";
import { rgba } from "../../../util/rgba";

export const Wrapper = styled.div`
  --font-size: 1rem;
  --caret-height-offset: 0.25rem;
  --line-height: 1.6;

  @media ${media.medium} {
    --font-size: 1.125rem;
  }

  @media ${media.large} {
    --font-size: 1.25rem;
    --caret-height-offset: 0.2rem;
  }

  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 56.25rem; /* 900px */
  margin-top: calc(var(--default-spacing) * 1.5);
`;

export const Word = styled.span<{
  focused: boolean;
  incorrect: boolean;
  theme: Theme;
}>`
  position: relative;
  color: ${({ theme }) => theme.primary};
  font-size: var(--font-size);
  line-height: var(--line-height);

  &:not(:last-of-type) {
    margin-right: 1ch;
  }

  &::after {
    content: "";
    position: absolute;
    width: 100%;
    left: 0;
    border-bottom: 2px solid transparent;
    border-radius: 1px;
    bottom: 2px;
    transition: border-bottom-color 0.1s linear;
  }

  ${({ focused, incorrect }) =>
    focused &&
    incorrect &&
    css`
      &::after {
        border-bottom-color: ${({ theme }) => theme.error};
      }
    `}
`;

export const Letter = styled.span<{
  focused: boolean;
  entered: boolean;
  missed: boolean;
  incorrect: boolean;
  theme: Theme;
}>`
  transition: color 0.1s linear, text-shadow 0.1s linear;
  ${({ focused }) =>
    !focused &&
    css`
      color: transparent !important;
      text-shadow: 0 0 0.625rem ${({ theme }) => rgba(theme.primary, 0.4)};
    `}

  ${({ entered }) =>
    entered &&
    css`
      color: ${({ theme }) => theme.highlight};
    `}

  ${({ focused, entered }) =>
    !focused &&
    entered &&
    css`
      text-shadow: 0 0 0.625rem ${({ theme }) => theme.highlight};
    `}

    ${({ missed }) =>
    missed &&
    css`
      color: ${({ theme }) => theme.missed};
    `}

  ${({ incorrect }) =>
    incorrect &&
    css`
      color: ${({ theme }) => theme.error};
    `}

  ${({ focused, incorrect }) =>
    !focused &&
    incorrect &&
    css`
      text-shadow: 0 0 0.625rem ${({ theme }) => theme.error};
    `}
`;

const CaretBlink = keyframes`
  from {
    opacity: 0.9;
  }

  47% {
    opacity: 0.9;
  }

  53% {
    opacity: 0;
  }

  to {
    opacity: 0;
  }
`;

export const Caret = styled.span.attrs<{
  currentWordPos: { x: number; y: number };
  offsetX: number;
}>(({ currentWordPos, offsetX }) => ({
  style: {
    transform: `translateX(${offsetX}ch)`,
    top: `${currentWordPos.y}px`,
    left: `${currentWordPos.x}px`,
  },
}))<{
  animate: boolean;
  focused: boolean;
  currentWordPos: { x: number; y: number };
  transitionTransform: boolean;
  offsetX: number;
  theme: Theme;
}>`
  display: inline-block;
  height: calc(calc(var(--font-size) / 1.5) * var(--line-height));
  font-size: var(--font-size);
  margin-top: 0.25rem;
  width: 0.125rem; // Option for hefty boye variant? Something like 1ch.
  background-color: ${({ theme }) => theme.highlight};
  opacity: 0.9;
  visibility: ${({ focused }) => (focused ? "visible" : "hidden")};
  position: absolute;
  transition: opacity 0.2s ease
    ${({ transitionTransform }) =>
      transitionTransform ? ", transform 0.1s linear" : ""};
  ${({ animate, focused }) =>
    animate &&
    focused &&
    css`
      animation: 1s cubic-bezier(0.78, 0.2, 0.05, 1) 0s infinite forwards
        ${CaretBlink};
    `}

  @media ${media.large} {
    margin-top: 0.3125rem;
  }
`;

export const FocusLostMessage = styled.span<{
  focused: boolean;
  theme: Theme;
}>`
  display: inline-block;
  position: absolute;
  left: 50%;
  width: fit-content;
  transform: translateX(-50%);
  margin-top: calc(var(--default-spacing) * 3);
  padding: 0 var(--default-spacing);
  text-align: center;
  color: ${({ theme }) => theme.primary};
  text-shadow: 0 0 0.625rem ${({ theme }) => theme.backgroundPrimary};
  font-size: 1rem;
  pointer-events: none;
  transition: opacity 0.15s ease;
  opacity: ${({ focused }) => (focused ? "0" : "1")};

  @media ${media.atleastMedium} {
    margin-top: calc(var(--default-spacing) * 2);
  }

  @media ${media.large} {
    font-size: 1.125rem;
  }
`;
