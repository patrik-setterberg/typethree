import styled, { Theme } from "styled-components";

import { Container } from "../UI/Container.styles";
//import media from "../../globals/media-breakpoints";

export const Footer = styled.footer<{
  theme: Theme;
}>`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${({ theme }) => theme.backgroundFourthenary};
  color: ${({ theme }) => theme.primary};
  font-size: 0.8125rem;

  & > ${Container} {
    justify-content: space-between;
  }
`;
