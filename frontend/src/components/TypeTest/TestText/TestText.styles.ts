import styled, { css, keyframes } from "styled-components";

import media from "../../../globals/media-breakpoints";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  max-width: 56.25rem; /* 900px */
  margin-top: calc(var(--default-spacing) * 1.5);
`;

const TEXT_LINE_HEIGHT = 1.6;

export const Word = styled.span`
  color: ${(props) => props.theme.primary};
  font-size: 1rem;
  line-height: ${TEXT_LINE_HEIGHT};

  &:not(:last-of-type) {
    margin-right: 1ch;
  }

  @media ${media.medium} {
    font-size: 1.125rem;
  }

  @media ${media.large} {
    font-size: 1.25rem;
  }
`;

export const Letter = styled.span<{ focused: boolean }>`
  transition: color 0.15s linear, text-shadow 0.1s linear;
  ${(props) =>
    !props.focused &&
    css`
      color: transparent;
      text-shadow: 0 0 0.625rem ${(props) => props.theme.primary04};
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

const CARET_FONT_SIZE = 1.25;

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
}>`
  display: inline-block;
  height: calc(${TEXT_LINE_HEIGHT} * ${CARET_FONT_SIZE - 0.3}rem);
  font-size: ${CARET_FONT_SIZE}rem;
  margin-top: 0.1875rem;
  width: 0.125rem; // Option for hefty boye variant? Something like 1ch.
  background-color: ${(props) => props.theme.highlight};
  opacity: 0.9;
  visibility: ${(props) => (props.focused ? "visible" : "hidden")};
  position: absolute;
  transition: opacity 0.2s ease
    ${(props) => (props.transitionTransform ? ", transform 0.08s linear" : "")};
  ${(props) =>
    props.animate &&
    props.focused &&
    css`
      animation: 1s cubic-bezier(0.78, 0.2, 0.05, 1) 0s infinite forwards
        ${CaretBlink};
    `}
`;

export const FocusLostMessage = styled.span<{ focused: boolean }>`
  display: inline-block;
  position: absolute;
  left: 50%;
  width: fit-content;
  transform: translateX(-50%);
  margin-top: calc(var(--default-spacing) * 3);
  padding: 0 var(--default-spacing);
  text-align: center;
  color: ${(props) => props.theme.primary};
  text-shadow: 0 0 0.625rem ${(props) => props.theme.backgroundPrimary};
  font-size: 1rem;
  pointer-events: none;
  transition: opacity 0.15s ease;
  opacity: ${(props) => (props.focused ? "0" : "1")};

  @media ${media.atleastMedium} {
    margin-top: calc(var(--default-spacing) * 2);
  }

  @media ${media.large} {
    font-size: 1.125rem;
  }
`;
