import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  & ::selection {
    background: ${(props) => props.theme.highlight};
    color: ${(props) => props.theme.backgroundTertiary};
  }
`;
