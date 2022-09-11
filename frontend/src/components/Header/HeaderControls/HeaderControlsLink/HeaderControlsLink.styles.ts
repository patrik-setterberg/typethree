import styled, { Theme } from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderControlsLink = styled(NavLink)``;

export const Wrapper = styled.div<{
  theme: Theme;
}>`
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
      transition: fill 0.5s ease;
      fill: ${({ theme }) => theme.highlight};
    }
  }

  &:hover svg {
    & path,
    & circle {
      fill: ${({ theme }) => theme.primary};
    }
  }
`;

/* Empty element positioned between link and label prevents losing hover state
  when moving cursor between the two elements. */
export const HoverHelper = styled.span`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  height: 0.5rem;
  top: 2rem;

  ${Wrapper}:hover & {
    display: inline-block;
  }
`;

export const HeaderControlsLinkTitle = styled.span<{
  theme: Theme;
}>`
  display: none;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;
  padding: 0.375rem 0.4375rem;
  background-color: ${({ theme }) => theme.highlight};
  background: linear-gradient(
    170deg,
    ${({ theme }) => theme.primary} 0%,
    ${({ theme }) => theme.primary} 33%,
    ${({ theme }) => theme.highlight} 66%
  );
  background-size: 100% 300%;
  background-position: 100% 100%;
  color: ${({ theme }) => theme.backgroundPrimary};
  border: 2px solid ${({ theme }) => theme.backgroundSecondary};
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
    background-position 0.75s ease-out, letter-spacing 0.15s ease-out;

  & a {
    display: block;
    margin-top: 0.375rem;
    padding: 0.375rem 0.5rem;
    border: 1px solid ${({ theme }) => theme.backgroundPrimary};
    border-radius: 0.375rem;
    background-color: ${({ theme }) => theme.backgroundFourthenary};
    color: ${({ theme }) => theme.highlight};
    text-decoration: none;
    transition: background-color 0.2s ease-in-out;

    &:hover {
      background-color: ${({ theme }) => theme.backgroundSecondary};
    }

    &:active {
      color: ${({ theme }) => theme.primary};
    }
  }

  // Custom media query, slightly larger than medium, to prevent overflow at medium breakpoint.
  @media only screen and (min-width: 800px) {
    display: inline-block;
    top: 2.25rem;

    ${Wrapper}:hover &,
    ${HoverHelper}:hover &,
    &:hover {
      visibility: visible;
      opacity: 1;
      background-position: 100% 0%;
      letter-spacing: 1px;
    }
  }
`;
