import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderControlsLink = styled(NavLink)``;

export const Wrapper = styled.div`
  position: relative;

  & + & {
    margin-left: var(--default-spacing);
  }

  & svg {
    width: 2rem;
    height: 2.25rem;
  }

  & svg {
    & path,
    & circle {
      transition: fill 0.5s ease;
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

export const HeaderControlsLinkTitle = styled.span`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  padding: 0.375rem 0.4375rem;
  background-color: ${(props) => props.theme.highlight};
  background: linear-gradient(
    170deg,
    ${(props) => props.theme.primary} 0%,
    ${(props) => props.theme.primary} 33%,
    ${(props) => props.theme.highlight} 66%
  );
  background-size: 100% 300%;
  background-position: 100% 100%;
  color: ${(props) => props.theme.backgroundPrimary};
  border: 2px solid ${(props) => props.theme.backgroundSecondary};
  border-radius: 0.375rem;
  font-size: 0.8125rem;
  line-height: 1;
  font-weight: 600;
  letter-spacing: 0.2px;
  visibility: hidden;
  opacity: 0;
  text-transform: uppercase;
  text-align: center;
  transition: visibility 0.1s ease-in-out, opacity 0.125s ease-in-out,
    background-position 0.75s ease-out, letter-spacing 0.3s ease;

  & a {
    display: block;
    margin-top: 0.375rem;
    padding: 0.375rem 0.5rem;
    border: 1px solid ${(props) => props.theme.backgroundPrimary};
    border-radius: 0.375rem;
    background-color: ${(props) => props.theme.backgroundFourthenary};
    color: ${(props) => props.theme.highlight};
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${(props) => props.theme.backgroundSecondary};
    }

    &:active {
      color: ${(props) => props.theme.primary};
    }
  }

  // Custom media query, slightly larger than medium, to prevent overflow at medium breakpoint.
  @media only screen and (min-width: 800px) {
    display: inline-block;
    top: 2.35rem;

    ${Wrapper}:hover &,
    &:hover {
      visibility: visible;
      opacity: 1;
      background-position: 100% 0%;
      letter-spacing: 1px;
    }
  }
`;
