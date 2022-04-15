import styled, { css } from "styled-components";

export const HeaderControlsButton = styled.button<{ modalIsOpen: boolean }>`
  background: transparent;
  border: none;
  cursor: pointer;

  ${(props) =>
    props.modalIsOpen &&
    css`
      & svg {
        & path,
        & circle {
          fill: ${(props) => props.theme.primary};
        }
      }
    `}
`;
