import React from "react";
import styled, { css } from "styled-components";
import media from "../../../globals/media-breakpoints";

export const Keyboard = styled.div`
  opacity: 0;
  width: fit-content;
  font-size: 18px;
  margin: 2rem auto 1rem;
  transition: opacity 0.2s ease-out;

  @media ${media.large} {
    opacity: 0.8;
  }
`;

export const Key = styled.span<{
  pressed: boolean;
  incorrect: boolean;
}>`
  display: inline-flex;
  border: 1px solid #777;
  border-radius: 0.5rem;
  padding: 1ch 1.5ch;
  line-height: 1;
  align-items: center;
  position: relative;
  pointer-events: none;
  color: ${(props) => props.theme.primary07};
  box-shadow: none;
  transition: all 0.03s ease-out;

  & + & {
    margin-left: 0.25ch;
  }

  ${(props) =>
    props.pressed &&
    css`
      color: ${(props) => props.theme.primary};
      border-color: ${(props) => props.theme.primary};
      box-shadow: inset 0px 0px 0.75rem ${(props) => props.theme.primary05};
      background-color: ${(props) => props.theme.primary04};
    `};

  ${(props) =>
    props.pressed &&
    props.incorrect &&
    css`
      color: firebrick;
      border-color: firebrick;
      box-shadow: inset 0px 0px 0.75rem rgba(255, 0, 0, 0.1);
      background-color: rgba(255, 0, 0, 0.1);
    `};
`;

export const Row = styled.div<{
  iso?: boolean;
  LShiftPressed?: boolean;
  RShiftPressed?: boolean;
}>`
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
      border-bottom: 2px solid ${(props) => props.theme.highlight};
      bottom: 0.5ch;
      opacity: 0.5;
    }
  }

  // BOTTOM ROW
  &:nth-child(3) {
    // LEFT SHIFT
    & > span:first-child {
      padding-right: ${(props) => (props.iso ? "2.5ch" : "7.25ch")};
      ${(props) =>
        props.LShiftPressed &&
        css`
          color: ${(props) => props.theme.primary};
          border-color: ${(props) => props.theme.primary};
          box-shadow: inset 0px 0px 0.75rem ${(props) => props.theme.primary05};
          background-color: ${(props) => props.theme.primary04};
        `};
    }

    // RIGHT SHIFT
    & > ${Key}:last-child {
      padding-left: 9.5ch;
      ${(props) =>
        props.RShiftPressed &&
        css`
          color: ${(props) => props.theme.primary};
          border-color: ${(props) => props.theme.primary};
          box-shadow: inset 0px 0px 0.75rem ${(props) => props.theme.primary05};
          background-color: ${(props) => props.theme.primary04};
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
