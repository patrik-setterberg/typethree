import styled, { Theme } from "styled-components";

export const PauseIcon = styled.svg<{
  theme: Theme;
}>`
  width: 1ch;
  fill: ${({ theme }) => theme.primary};
`;
