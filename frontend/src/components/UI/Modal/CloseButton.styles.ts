import styled, { Theme } from "styled-components";
import media from "../../../globals/media-breakpoints";

export const CloseButton = styled.button<{
  theme: Theme;
}>`
  background: transparent;
  border: none;
  display: flex;
  cursor: pointer;
  align-self: flex-end;
  padding: 0.25rem;
  margin: 0.75rem 0.75rem 0 0;
  opacity: 0.75;
  transition: all 0.1s ease;
  transform-origin: center;

  svg {
    width: 1rem;
    height: 1rem;
    fill: ${({ theme }) => theme.backgroundTertiary};
  }

  &:hover {
    opacity: 0.9;
  }

  &:active {
    transform: scale(0.85);
  }

  @media ${media.atleastMedium} {
    svg {
      width: 1.375rem;
      height: 1.375rem;
    }
  }
`;
