import styled from "styled-components";
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

export const Row = styled.div<{ iso?: boolean }>`
  // TOP ROW
  &:nth-child(1) {
    margin-left: 7ch;

    // TEMP PREVIEW PRESSED INCORRECT
    & > span:nth-child(8) {
      border-color: rgba(255, 0, 0, 0.75);
      box-shadow: inset 0px 0px 0.75rem rgba(255, 0, 0, 0.6);
      color: rgba(255, 0, 0, 0.75);
    }
  }

  // HOME ROW
  &:nth-child(2) {
    margin-left: 8ch;

    // TEMP PREVIEW PRESSED CORRECT
    & > span:nth-child(3) {
      border-color: ${(props) => props.theme.primary};
      box-shadow: inset 0px 0px 0.75rem ${(props) => props.theme.primary07};
    }

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
    }

    // RIGHT SHIFT
    & > span:last-child {
      padding-left: 9.5ch;
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

export const Key = styled.span`
  display: inline-flex;
  border: 1px solid #777;
  border-radius: 0.5rem;
  padding: 1ch 1.5ch;
  line-height: 1;
  align-items: center;
  position: relative;
  pointer-events: none;
  transition: background-color 0.04s linear, border 0.05s linear;
  color: ${(props) => props.theme.primary};

  & + & {
    margin-left: 0.25ch;
  }
`;
