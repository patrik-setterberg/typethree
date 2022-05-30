import styled, { css, keyframes } from "styled-components";

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
  font-size: 20px;
  line-height: ${TEXT_LINE_HEIGHT};

  &:not(:last-of-type) {
    margin-right: 1ch;
  }
`;

export const Letter = styled.span``;

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

export const Caret = styled.span<{ animate: boolean }>`
  display: inline-block;
  height: calc(${TEXT_LINE_HEIGHT} * ${CARET_FONT_SIZE - 0.3}rem);
  font-size: ${CARET_FONT_SIZE}rem;
  margin-top: 0.1875rem;
  width: 0.125rem; // Option for hefty boye variant? Something like 1ch.
  background-color: ${(props) => props.theme.highlight};
  opacity: 0.9;
  position: absolute;
  left: 0;
  top: 0;
  transition: opacity 0.2s ease;
  ${(props) =>
    props.animate &&
    css`
      animation: 1s cubic-bezier(0.78, 0.2, 0.05, 1) 0s infinite forwards
        ${CaretBlink};
    `}
`;
