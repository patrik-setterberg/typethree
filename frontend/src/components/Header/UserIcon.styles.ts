import styled from "styled-components";

export const UserIcon = styled.span<{ isLoggedIn: boolean }>`
  display: flex;
  align-items: center;

  & svg {
    transform: scale(0.9);
    transition: transform 0.125s ease;

    & .user-icon__head,
    & .user-icon__body {
      fill: ${(props) =>
        props.isLoggedIn ? (props) => props.theme.highlight : "none"};
    }
  }

  &:hover svg {
    transform: scale(1);

    & .user-icon__head,
    & .user-icon__body {
      fill: ${(props) =>
        props.isLoggedIn ? (props) => props.theme.primary : "none"};
    }
  }
`;
