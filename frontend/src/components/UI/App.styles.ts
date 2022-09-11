import styled, { Theme } from "styled-components";

export const AppContainer = styled.div<{
  theme: Theme;
}>`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & ::selection {
    background: ${({ theme }) => theme.highlight};
    color: ${({ theme }) => theme.backgroundTertiary};
  }
`;
