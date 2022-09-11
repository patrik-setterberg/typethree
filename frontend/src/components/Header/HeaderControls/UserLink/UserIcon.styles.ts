import styled, { css, Theme } from "styled-components";
import {
  Wrapper,
  HeaderControlsLink,
} from "../HeaderControlsLink/HeaderControlsLink.styles";

export const UserIcon = styled.span<{
  isLoggedIn: boolean;
  theme: Theme;
}>`
  display: flex;
  align-items: center;

  & svg {
    transform: scale(0.9);
    transition: transform 0.125s ease;

    & .user-icon__head,
    & .user-icon__body {
      fill: none;
      ${({ isLoggedIn }) =>
        isLoggedIn &&
        css`
          fill: ${({ theme }) => theme.highlight};
        `}
    }
  }

  ${Wrapper}:hover & svg,
  &:hover svg {
    transform: scale(1);

    & .user-icon__head,
    & .user-icon__body {
      fill: ${({ isLoggedIn }) =>
        isLoggedIn ? ({ theme }) => theme.primary : "none"};
    }
  }

  // On user page.
  ${HeaderControlsLink}.active & svg {
    // Not logged in.
    & > *:not(.user-icon__head):not(.user-icon__body) {
      fill: ${({ theme }) => theme.primary};
    }

    // Logged in.
    ${({ isLoggedIn }) =>
      isLoggedIn &&
      css`
        & .user-icon__head,
        & .user-icon__body {
          fill: ${({ theme }) => theme.primary};
        }
      `}
  }
`;
