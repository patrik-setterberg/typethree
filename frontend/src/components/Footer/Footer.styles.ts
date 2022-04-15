import styled from "styled-components";

import Container from "../UI/Container.styles";
//import media from "../../globals/media-breakpoints";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: ${props => props.theme.backgroundFourthenary};
  color: ${props => props.theme.primary};
  font-size: 0.8125rem;

  & > ${Container} {
    justify-content: space-between;
  }
`