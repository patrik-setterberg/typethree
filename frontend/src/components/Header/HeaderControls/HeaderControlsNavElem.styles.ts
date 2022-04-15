/**
 * HeaderControlsNavElem can be either a NavLink or a button.
 */

import styled from "styled-components";

import media from "../../../globals/media-breakpoints";
import { HeaderControlsLink } from "./HeaderControlsLink/HeaderControlsLink.styles";
import { HeaderControlsButton } from "./HeaderControlsButton/HeaderControlsButton.styles";

export const Wrapper = styled.div`
  position: relative;

  & + & {
    margin-left: var(--default-spacing);
  }

  & svg {
    width: 2rem;
    height: auto;
  }

  & svg {
    & path,
    & circle {
      transition: fill 0.75s ease;
      fill: ${(props) => props.theme.highlight};
    }
  }

  &:hover svg {
    & path,
    & circle {
      fill: ${(props) => props.theme.primary};
    }
  }
`;

export const HeaderControlsElemTitle = styled.span`
  display: none;
  position: absolute;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  padding: 0.2rem 0.25rem;
  background-color: ${(props) => props.theme.highlight};
  background: linear-gradient(
    160deg,
    ${(props) => props.theme.primary} 33%,
    ${(props) => props.theme.highlight} 66%
  );
  background-size: 300% 100%;
  background-position: 100%;
  color: ${(props) => props.theme.backgroundPrimary};
  border: 2px solid ${(props) => props.theme.backgroundSecondary};
  border-radius: 0.375rem;
  font-size: 0.8125rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.2px;
  text-transform: uppercase;
  opacity: 0;
  transition: opacity 0.125s ease-in-out, top 0.125s ease-in-out,
    background-position 1s ease-out, letter-spacing 0.3s ease;
  pointer-events: none;

  // Custom media query, slightly larger than medium, to prevent overflow at medium breakpoint.
  @media only screen and (min-width: 800px) {
    display: inline-block;

    ${HeaderControlsButton}:hover ~ &,
    ${HeaderControlsLink}:hover ~ & {
      opacity: 1;
      top: 2.35rem;
      background-position: 0%;
      letter-spacing: 1px;
    }
  }

  @media ${media.large} {
    ${HeaderControlsButton}:hover ~ &,
    ${HeaderControlsLink}:hover ~ & {
      top: 2.45rem;
    }
  }
`;