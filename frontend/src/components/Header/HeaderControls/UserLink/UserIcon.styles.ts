import styled, { css } from "styled-components";
import {
  Wrapper,
  HeaderControlsLink,
} from "../HeaderControlsLink/HeaderControlsLink.styles";

export const UserIcon = styled.span<{
  isLoggedIn: boolean;
}>`
  display: flex;
  align-items: center;

  & svg {
    transform: scale(0.9);
    transition: transform 0.125s ease;

    & .user-icon__head,
    & .user-icon__body {
      fill: none;
      ${(props) =>
        props.isLoggedIn &&
        css`
          fill: ${(props) => props.theme.highlight};
        `}
    }
  }

  ${Wrapper}:hover & svg,
  &:hover svg {
    transform: scale(1);

    & .user-icon__head,
    & .user-icon__body {
      fill: ${(props) =>
        props.isLoggedIn ? (props) => props.theme.primary : "none"};
    }
  }

  // On user page.
  ${HeaderControlsLink}.active & svg {
    // Not logged in.
    & > *:not(.user-icon__head):not(.user-icon__body) {
      fill: ${(props) => props.theme.primary};
    }

    // Logged in.
    ${(props) =>
      props.isLoggedIn &&
      css`
        & .user-icon__head,
        & .user-icon__body {
          fill: ${(props) => props.theme.primary};
        }
      `}
  }
`;
