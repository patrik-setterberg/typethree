import styled, { Theme } from "styled-components";

export const Main = styled.main<{
  theme: Theme;
}>`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: ${({ theme }) => theme.backgroundPrimary};
`;
